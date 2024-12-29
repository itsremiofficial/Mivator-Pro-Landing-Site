export type BotStatus = 'online' | 'idle' | 'dnd';
export type ActivityType = 'playing' | 'watching' | 'listening' | 'streaming' | 'custom' | 'competing';

export interface Member {
  id: number;
  permissions: string[];
}

export interface BotFormData {
  // Step 1
  botSecret: string;
  botToken: string;
  botId: number;

  // Step 2
  botName: string;
  botStatus: BotStatus;
  botActivityType: ActivityType;
  botActivity: string;

  // Step 3
  owners: number[];
  members: Member[];
}
