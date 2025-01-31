"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  service: z.enum(["Communication digitale", "Développement web", "Création visuelle"]),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, // Nous utiliserons une variable d'environnement
          ...data,
        }),
      });

      if (response.ok) {
        alert("Message envoyé avec succès!");
        reset();
        onClose();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (_) {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-semibold">
              Contactez-nous
            </Dialog.Title>
            <button 
              onClick={() => onClose()} 
              className="text-gray-500 hover:text-gray-700"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom et prénom</label>
              <input
                {...register("name")}
                className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
                placeholder="Votre nom complet"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-400 caret-orange-400 rounded-lg"
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Téléphone</label>
              <input
                {...register("phone")}
                className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-400 caret-orange-400 rounded-lg"
                placeholder="Votre numéro de téléphone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Service</label>
              <select
                {...register("service")}
                className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-400 caret-orange-400 rounded-lg"
              >
                <option value="Communication digitale">Communication digitale</option>
                <option value="Développement web">Développement web</option>
                <option value="Création visuelle">Création visuelle</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                {...register("message")}
                className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-400 caret-orange-400 rounded-lg"
                rows={4}
                placeholder="Votre message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff942b] text-white py-2 rounded-lg hover:bg-[#e67f1c] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 