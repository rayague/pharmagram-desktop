import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";

const DropdownUtilisateur = () => {
  const [dropdownOuvert, setDropdownOuvert] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOuvert(false)} className="relative">
      <div className="flex items-center gap-4">
        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src="/images/user/user1.png"
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="Utilisateur"
            className="overflow-hidden rounded-full"
          />
        </span>

        <span className="flex items-center gap-2 font-medium text-dark dark:text-dark-6">
          <span className="hidden lg:block">Nom de la pharmacie</span>
        </span>
      </div>
    </ClickOutside>
  );
};

export default DropdownUtilisateur;
