export interface LoreChoice {
  id: string; // e.g., "choice_001_a"
  text: string; // Text displayed on the button for the choice
  outcomeType: 'addsShard' | 'triggersArchitectComment' | 'nothing'; // More types can be added
  outcomeValue?: string; // e.g., ID of shard to add, ID of architect comment to trigger
  nextLoreId?: string; // Optional: ID of another lore fragment to show immediately after this choice
}

export interface LoreFragment { // Exporting for use in StoryModeScreen
  id: string;
  title: string;
  text: string;
  coords: [number, number]; // [x, y]
  architect?: string; // Optional
  district?: string;  // Optional
  triggered: boolean; // Keep track of triggered state
  choices?: LoreChoice[]; // Optional array of choices
}

// Updated loreDatabase with new shard data from feedback
// Exporting for direct access by StoryModeScreen's archive. Consider a getter for better encapsulation.
export const loreDatabase: LoreFragment[] = [
  {
    id: 'shard_001',
    title: 'Fragment: Signal', // Added title for consistency with LorePopup
    coords: [4, 6], // x=4, y=6
    district: 'District 0',
    text: "No noise. No identity. Only signal.",
    architect: 'Architect_2',
    triggered: false,
  },
  {
    id: 'shard_002',
    title: 'Fragment: Strength', // Added title
    coords: [10, 3], // x=10, y=3
    district: 'District 1',
    text: "You felt stronger before. Why?",
    architect: 'Architect_1',
    triggered: false,
  },
  {
    id: 'shard_003',
    title: 'Fragment: Authority', // Added title
    coords: [7, 8], // x=7, y=8
    district: 'District 4',
    text: "Authority never leaves quietly.",
    architect: 'Architect_2',
    triggered: false,
  },
  {
    id: 'shard_004',
    title: 'Fragment: Edge', // Added title
    coords: [2, 5], // x=2, y=5
    district: 'District 0',
    text: "If you see the edge, follow it.",
    architect: 'Architect_3',
    triggered: false,
  },
  {
    id: 'shard_005',
    title: 'Fragment: Memory', // Added title
    coords: [12, 4], // x=12, y=4
    district: 'District 1',
    text: "This shard is not yours. But you remember it. Why?",
    architect: 'Architect_3',
    triggered: false,
  },
  {
    id: 'shard_choice_001',
    title: 'Fragment: The Crossroads',
    coords: [1, 3], // Example for district0, ensure this is an '*' tile
    district: 'District 0',
    text: "You find a flickering console. It presents two options. Which path will you encode into your being?",
    architect: 'Architect_Observer',
    triggered: false,
    choices: [
      {
        id: 'choice_crossroads_a',
        text: "Path of Echoes (Gain 'Echo Shard')",
        outcomeType: 'addsShard',
        outcomeValue: 'shard_echo_001',
      },
      {
        id: 'choice_crossroads_b',
        text: "Path of Silence (Triggers Architect Comment)",
        outcomeType: 'triggersArchitectComment',
        outcomeValue: 'arch_d0_choice_silence',
      },
    ],
  },
  { // Dependent shard for choice A
    id: 'shard_echo_001',
    title: 'Echo Shard: Whispers',
    coords: [-1, -1], // Not physically on map, gained via choice
    district: 'District 0',
    text: "A faint whisper now follows you, a remnant of a choice made. It speaks of forgotten names.",
    architect: 'Architect_Observer',
    triggered: false, // Will be marked true when added
  }
];

// New Architect comment for choice B
export const architectCommentDatabase: ArchitectComment[] = [
  // District 0
  {
    id: 'arch_d0_enter_1',
    text: "Architect_1: \"Another subject begins the maze. Will this one be different? Unlikely.\"",
    architect: 'Architect_1',
    districtId: 'district0',
    triggerType: 'onEnterDistrict',
  },
  {
    id: 'arch_d0_tile_3_3',
    text: "Architect_2: \"They navigate the void. Do they seek an exit, or an understanding of its emptiness?\"",
    architect: 'Architect_2',
    districtId: 'district0',
    triggerType: 'onSpecificTile',
    coords: [3, 3],
  },
  {
    id: 'arch_d0_tile_5_7',
    text: "Architect_3: \"The patterns here are intentionally sparse. A test of patience, or a mercy?\"",
    architect: 'Architect_3',
    districtId: 'district0',
    triggerType: 'onSpecificTile',
    coords: [5, 7], // Example, ensure this tile is an '@' in district0.txt
  },
  { // New comment for choice outcome
    id: 'arch_d0_choice_silence',
    text: "Architect_Observer: \"They chose silence. An interesting, if predictable, deviation. The void appreciates quiet contemplation.\"",
    architect: 'Architect_Observer',
    districtId: 'district0', // Or make it global if not district specific
    triggerType: 'onSpecificTile', // This will be triggered programmatically, not by tile
    coords: [-1,-1], // Not tied to a physical tile
  },
  // District 1
  {
    id: 'arch_d1_enter_1',
    text: "Architect_3: \"District 1: the crucible of choice. Wealth or strength? Most choose poorly.\"",
    architect: 'Architect_3',
    districtId: 'district1',
    triggerType: 'onEnterDistrict',
  },
  {
    id: 'arch_d1_tile_5_5',
    text: "Architect_1: \"They step on an Architect's sigil. Do they think we don't see them? Every move is logged.\"",
    architect: 'Architect_1',
    districtId: 'district1',
    triggerType: 'onSpecificTile',
    coords: [5, 5],
  },
  {
    id: 'arch_d1_tile_8_2',
    text: "Architect_2: \"Ambition glitters brightly in this district. Often, it's just polished brass.\"",
    architect: 'Architect_2',
    districtId: 'district1',
    triggerType: 'onSpecificTile',
    coords: [8, 2], // Example for district1
  },
  // District 4
   {
    id: 'arch_d4_enter_1',
    text: "Architect_2: \"District 4. Authority. Resistance. The eternal dance. So predictable.\"",
    architect: 'Architect_2',
    districtId: 'district4',
    triggerType: 'onEnterDistrict',
  },
  {
    id: 'arch_d4_tile_2_2',
    text: "Architect_1: \"This one seems... persistent. Perhaps there's a flicker of defiance after all. Or just stubbornness.\"",
    architect: 'Architect_1',
    districtId: 'district4',
    triggerType: 'onSpecificTile',
    coords: [2, 2],
  },
  {
    id: 'arch_d4_tile_6_9',
    text: "Architect_3: \"The illusion of control is potent here. Both for them, and for the player.\"",
    architect: 'Architect_3',
    districtId: 'district4',
    triggerType: 'onSpecificTile',
    coords: [6, 9], // Example for district4
  },
];

export function findLoreAtCoordinates(playerX: number, playerY: number): LoreFragment | null {
  const roundedX = Math.floor(playerX);
  const roundedY = Math.floor(playerY);

  for (const fragment of loreDatabase) {
    if (
      fragment.coords[0] === roundedX &&
      fragment.coords[1] === roundedY &&
      !fragment.triggered // Only return if not yet triggered
    ) {
      return fragment;
    }
  }
  return null;
}

export function markLoreAsTriggered(loreId: string): void {
  const fragment = loreDatabase.find(f => f.id === loreId);
  if (fragment) {
    fragment.triggered = true;
  }
}

export function resetAllLoreEvents(): void {
  loreDatabase.forEach(fragment => fragment.triggered = false);
}

// Architect Commentary System
export interface ArchitectComment {
  id: string;
  text: string;
  architect: string; // e.g., 'Architect_1', 'Architect_2', 'Architect_3'
  districtId: string; // e.g., 'district0', 'district1', 'district4'
  triggerType: 'onEnterDistrict' | 'onSpecificTile' | 'onChoiceOutcome'; // Added onChoiceOutcome
  coords?: [number, number]; // [x, y], required if triggerType is 'onSpecificTile'
  // triggered?: boolean; // Optional: for preventing immediate re-triggering if needed later
}

// Note: architectCommentDatabase was already defined. The diff tool might have duplicated it.
// I'm ensuring the new 'arch_d0_choice_silence' is part of the existing database.
// The previous diff for architectCommentDatabase should be considered the source of truth.
// This is a manual merge observation.

/**
 * Retrieves a specific ArchitectComment by its ID.
 * @param commentId The ID of the architect comment.
 * @returns The ArchitectComment object or undefined if not found.
 */
export function getArchitectCommentById(commentId: string): ArchitectComment | undefined {
  return architectCommentDatabase.find(comment => comment.id === commentId);
}

/**
 * Retrieves architect comments based on district, trigger type, and optionally coordinates.
 * @param districtId The ID of the current district.
 * @param triggerType The type of trigger ('onEnterDistrict' or 'onSpecificTile').
 * @param coords Optional coordinates [x,y], required if triggerType is 'onSpecificTile'.
 * @returns An array of matching ArchitectComment objects.
 */
export function getArchitectComments(
  districtId: string,
  triggerType: 'onEnterDistrict' | 'onSpecificTile',
  coords?: [number, number]
): ArchitectComment[] {
  return architectCommentDatabase.filter(comment => {
    if (comment.districtId !== districtId || comment.triggerType !== triggerType) {
      return false;
    }
    if (triggerType === 'onSpecificTile') {
      if (!coords || !comment.coords) return false; // Ensure both are defined
      return comment.coords[0] === coords[0] && comment.coords[1] === coords[1];
    }
    return true; // For 'onEnterDistrict', only districtId and triggerType need to match
  });
}