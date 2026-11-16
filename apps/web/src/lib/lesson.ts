export type Exercise = { id: string; title: string; instructions: string; starter: string; hint: string; expectedLines: string[] };

export const firstLesson = {
  id: "premiers-pas",
  eyebrow: "MODULE 01 / LESSON 01",
  title: "Ton premier programme Python",
  subtitle: "Découvre print(), modifie une variable et observe ce que fait ton code.",
  objectives: ["Afficher un message dans la console", "Créer et modifier une variable", "Comprendre que Python exécute les instructions dans l'ordre"],
  concepts: ["print()", "variable", "chaîne de caractères"],
  exercises: [
    { id: "bonjour", title: "Dis bonjour à Nova", instructions: "Affiche exactement « Bonjour Nova » dans la console avec print().", starter: 'print("Bonjour Nova")', hint: "Une fonction print() affiche le texte placé entre ses parenthèses.", expectedLines: ["Bonjour Nova"] },
    { id: "variable", title: "Crée ta première variable", instructions: "Crée une variable prenom avec la valeur « Alex », puis affiche « Bonjour Alex » avec print().", starter: 'prenom = "Alex"\nprint("Bonjour", prenom)', hint: "Stocke « Alex » dans prenom, puis donne prenom comme deuxième argument à print().", expectedLines: ["Bonjour Alex"] },
    { id: "compter", title: "Modifie une valeur", instructions: "Crée age = 12, augmente age de 1, puis affiche « 13 ».", starter: 'age = 12\n# Augmente age de 1\nprint(age)', hint: "Tu peux utiliser age = age + 1 avant le print().", expectedLines: ["13"] },
  ] satisfies Exercise[],
};

export function checkOutput(output: string, expectedLines: string[]) {
  const actual = output.replace(/\r/g, "").trim().split("\n").map(s => s.trim());
  return actual.length === expectedLines.length && actual.every((value, i) => value === expectedLines[i]);
}
