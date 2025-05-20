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
📌 **Motivering:** Koden uppfyller kraven för både G och VG. Applikationen presenterar en lista över todo-objekt, tillåter borttagning och återställning av färdiga objekt, samt tillåter skapande av nya todos via ett formulär. State management och komponentdesign har genomförts bra och local storage används för att spara data. Tailwind CSS används för styling, vilket är ett grafiskt ramverk som krävdes för VG.

💡 **Förbättringsförslag:**  
Det vore bra att lägga till en mer robust felhantering, speciellt för local storage operationer och nätverksanrop (i det fall nätverksanrop används i framtiden).,Förbättra formulärvalidering utöver att bara kontrollera att titeln inte är tom, t.ex. kontrollera att prioritet är inom giltiga värden.,Implementera en confirmation prompt vid borttagning av todos för att förhindra oavsiktligt borttagande.,Koden kunde struktureras för att förbättra separation av bekymmer, t.ex. flytta local storage operationer till en separat utility-fil för att undvika att blanda logik med komponentpresentation.,Försök att bryta ned store funktionerna till mindre komponenter eller crochets där det är möjligt för att maximera återanvändbarheten.