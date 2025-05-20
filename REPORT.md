# 📌 Rättningsrapport – fed24s-the-last-todo-CJVIK

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VLovMVBC)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24s-the-last-todo-CJVIK\src\models\ToDo.ts - no-unused-vars - 'priority' is defined but never used.,no-unused-vars - 'title' is defined but never used.,no-unused-vars - 'description' is defined but never used.,no-unused-vars - 'completed' is assigned a value but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** The code satisfies all the requirements for both the G and VG grading criteria. The application allows for adding, removing, and marking tasks as done via a clear UI. The application employs state management effectively across multiple components and uses local storage to persist data. Tailwind CSS is utilized for styling, providing visually appealing UI elements.

💡 **Förbättringsförslag:**  
While the application functions well, there are areas to enhance for better maintainability and performance:
1. **Code Comments and Documentation**: While there are some comments in the model file, adding more brief comments explaining the logic in complex parts can make the code more comprehensible to other developers.
2. **Error Handling**: Currently, the code has basic alert-based error handling. Consider a more user-friendly approach, such as inline error messages, especially for form validation.
3. **TypeScript Types**: Ensure TypeScript types are consistently used across all components to enhance code reliability and clarity. TypeScript interfaces can potentially replace classes for defining ToDo objects to improve code cleanliness.
4. **Performance**: When updating the local storage, consider using useEffect to synchronize the local storage with state changes to prevent potential stale closures.
5. **CSS Utility Classes**: For better consistency and maintainability, define some commonly used Tailwind classes in a CSS module to avoid repetition.
6. **Code Organization**: Components could benefit from being organized into subfolders based on functionality, e.g., having separate folders for forms, lists, and utility components.