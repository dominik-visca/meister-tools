import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import meleeWeapons from "./data/melee_weapons";

const allCategories = [
  "all",
  ...new Set(meleeWeapons.map((meleeWeapon) => meleeWeapon.talent)),
];

function App() {
  const [meleeWeaponItems, setMeleeWeaponItems] = useState(meleeWeapons);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMeleeWeaponItems(meleeWeapons);
      return;
    }

    const newItems = meleeWeapons.filter((item) => item.talent === category);
    setMeleeWeaponItems(newItems);
  };

  return (
    <main>
      <section className="sm:container mx-auto">
        <div className="title">
          <h2>Nahkampfwaffen</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={meleeWeaponItems} />
      </section>
    </main>
  );
}

export default App;
