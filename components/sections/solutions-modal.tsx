"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, Globe, MessageSquare, Palette, Check } from "lucide-react";

const SolutionCard = ({
  title,
  price,
  features,
  type,
}: {
  title: string;
  price: string;
  features: string[];
  type: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-[#ff942b]">{title}</h3>
      <span className="px-3 py-1 bg-orange-100 text-[#ff942b] text-sm rounded-full">
        {type}
      </span>
    </div>
    <div className="mb-6">
      <div className="text-2xl font-bold text-gray-900 mb-6">{price}</div>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#ff942b] mt-0.5 flex-shrink-0" />
            <span className="text-gray-600 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export function SolutionsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const solutions = [
    {
      title: "Offre Evolus",
      price: "50.000 Xof",
      type: "MENSUEL",
      features: [
        "Analyse générale de la communication digitale de l'entreprise",
        "Création et/ou administration d'une page réseau social",
        "Un boost visibilité par mois",
        "08 créations visuelles",
      ],
    },
    {
      title: "Offre Glory",
      price: "110.000 Xof",
      type: "MENSUEL",
      features: [
        "Analyse générale de la communication digitale de l'entreprise",
        "Création et/ou administration de deux pages réseaux sociaux",
        "Un boost visibilité par mois",
        "Conception de deux (2) vidéos",
        "16 créations visuelles",
        "Veille concurrentielle",
      ],
    },
    {
      title: "Offre Warrior",
      price: "450.000 Xof",
      secondaryPrice: "300.000 Xof / mensuel",
      type: "SOUSCRIPTION",
      features: [
        "Analyse générale de la communication digitale de l'entreprise",
        "Création et/ou administration de deux pages réseaux sociaux",
        "Un boost visibilité par mois",
        "Refonte ou création de site internet",
        "Conception de quatre (4) vidéos",
        "16 créations visuelles",
        "Création ou refonte d'un site internet vitrine",
        "Optimisation du référencement naturel sur les moteurs de recherches (Google et Safari)",
        "Veille concurrentielle",
      ],
    },
  ];

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f8f8f8] rounded-xl p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-semibold text-gray-900">
            Nos offres
            </Dialog.Title>
            <button 
              onClick={() => onClose()} 
              className="text-gray-500 hover:text-gray-700"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="flex flex-col">
                <SolutionCard {...solution} />
                {solution.secondaryPrice && (
                  <div className="mt-2 text-center text-lg font-semibold text-[#ff942b]">
                    {solution.secondaryPrice}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 