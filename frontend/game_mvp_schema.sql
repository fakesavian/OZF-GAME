-- USERS
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  username TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

-- PLAYER PROFILES
CREATE TABLE player_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  character_class_id UUID REFERENCES character_classes(id),
  level INT DEFAULT 1,
  experience INT DEFAULT 0,
  unlocked_abilities UUID[],
  equipped_cosmetic_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);

-- CHARACTER CLASSES
CREATE TABLE character_classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  passive_ability_id UUID,
  icon TEXT
);

-- ABILITIES
CREATE TABLE abilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  description TEXT,
  class_id UUID REFERENCES character_classes(id),
  level_unlock INT,
  type TEXT, -- active | passive | ultimate
  energy_cost INT,
  cooldown INT,
  effect_json JSONB,
  icon TEXT
);

-- MATCHES
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  player_a_id UUID REFERENCES player_profiles(id),
  player_b_id UUID REFERENCES player_profiles(id),
  winner_id UUID REFERENCES player_profiles(id),
  status TEXT, -- active | completed | forfeit
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  is_bot BOOLEAN DEFAULT false
);

-- TURNS
CREATE TABLE turns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES matches(id),
  turn_number INT,
  acting_player_id UUID REFERENCES player_profiles(id),
  ability_id UUID REFERENCES abilities(id),
  target_id UUID REFERENCES player_profiles(id),
  result_json JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- COSMETICS
CREATE TABLE cosmetics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  rarity TEXT,
  image TEXT,
  is_nft BOOLEAN DEFAULT false,
  solana_mint_address TEXT,
  owner_id UUID REFERENCES player_profiles(id)
);