
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// func 1

function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(`Заплачу: ${getMyTaxes.call(ukraine, 5000)}`);

// func 2

function getMiddleTexas() {
  return this.tax * this.middleSalary;
}

console.log(`Айтішник тут платить: ${getMiddleTexas.call(litva)}`);

// func 3

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log(`Заплатиш тут: ${getTotalTaxes.call(latvia)}`);

// func 4
function getMySalary(country) {
  setInterval(() => {
    const obj = {};
    obj.salary = +(Math.random() * (2000.0 - 1500.0) + 1500.0).toFixed(2);
    obj.taxes = +(country.tax * obj.salary).toFixed(2);
    obj.profit = +(obj.salary - obj.taxes).toFixed(2);
    console.log(obj);
  }, 10000);
}

getMySalary(ukraine);

