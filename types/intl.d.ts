import type messages from "@/messages/fr.json";

type IntlMessagesType = typeof messages;

declare global {
  type IntlMessages = IntlMessagesType;
}

export {};
