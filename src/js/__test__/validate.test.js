import { validateCard } from "../validate";
import { typeCard } from "../typecard";

test("true если валидация прошла", () => {
  expect(validateCard("4111111111111111")).toBe(true);
});

test("false если некорректная карта", () => {
  expect(validateCard("123456789999999")).toBe(false);
});

test("карта Visa начинается с 4", () => {
  expect(typeCard("4916226317954713")).toBe("Visa");
});

test("карта MasterCard начинаетсяс 5", () => {
  expect(typeCard("5442327434737823")).toBe("MasterCard");
});

test("карта American Express начинается с 37", () => {
  expect(typeCard("374061250862596")).toBe("American Express");
});

test("карта Mir начинается с 220", () => {
  expect(typeCard("2200000000000000")).toBe("Mir");
});
