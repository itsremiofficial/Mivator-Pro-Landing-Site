export type BotStatus = 'online' | 'idle' | 'dnd' | 'streaming';

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
  botActivity: string;
  
  // Step 3
  owners: number[];
  members: Member[];
}