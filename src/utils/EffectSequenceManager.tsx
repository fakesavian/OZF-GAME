export interface SequenceStep {
  precast?: () => Promise<void>;
  applyEffect: () => Promise<void>;
  react?: () => Promise<void>;
  cleanup?: () => Promise<void>;
}

export class EffectSequenceManager {
  private queue: { step: SequenceStep; resolve: () => void }[] = [];
  private running = false;

  async start(step: SequenceStep): Promise<void> {
    return new Promise(resolve => {
      this.queue.push({ step, resolve });
      if (!this.running) {
        this.processQueue();
      }
    });
  }

  cancel() {
    this.queue = [];
    this.running = false;
  }

  private async processQueue() {
    if (this.running) return;
    this.running = true;
    while (this.queue.length) {
      const { step, resolve } = this.queue.shift()!;
      try {
        if (step.precast) await step.precast();
        await step.applyEffect();
        if (step.react) await step.react();
        if (step.cleanup) await step.cleanup();
      } finally {
        resolve();
      }
    }
    this.running = false;
  }
}

export const delay = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

import React, { createContext, useContext, useRef } from 'react';

const EffectSequenceContext = createContext<EffectSequenceManager | null>(null);

export const EffectSequenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const managerRef = useRef<EffectSequenceManager>();
  if (!managerRef.current) {
    managerRef.current = new EffectSequenceManager();
  }
  return (
    <EffectSequenceContext.Provider value={managerRef.current}>
      {children}
    </EffectSequenceContext.Provider>
  );
};

export const useEffectSequenceManager = () => {
  const ctx = useContext(EffectSequenceContext);
  if (!ctx) throw new Error('useEffectSequenceManager must be used within EffectSequenceProvider');
  return ctx;
};
