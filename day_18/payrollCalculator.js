class Company{
    constructor(myEmployees, salary) {
      this.myEmployees = [];
      this.healthFundTotal = 0;
      this.retirementFundTotal = 0;
    }
    addEmployees(){
        this.myEmployees.push(...arguments);
        console.log(this.myEmployees)
    }
    generatePayroll(){
      let total = 0;
      this.myEmployees.map((item) => {
        let bruto = item.salary;
        let neto = 0
        if(item.bonus){    
          neto += (bruto-(bruto*(0.12)))+item.bonus;
        } else {
          neto = bruto-(bruto*(0.12))
        }
        total += neto;
      });
      console.log(total)
      company.healthFund();
      company.retirementFund();
    } 
    healthFund(){
      let total = 0;
      this.myEmployees.map((item) => {
        let bruto = item.salary;
        let health = bruto*0.04  
        total += health;
      })
      this.healthFundTotal += total;
      console.log(this.healthFundTotal);
    }
    retirementFund(){
      let total = 0;
      this.myEmployees.map((item) => {
        let bruto = item.salary;
        let retirement = bruto*0.08;    
        total += retirement;
      })
      this.retirementFundTotal += total;
      console.log(this.retirementFundTotal);
    }
  }
  
  class Employee{
    constructor(name, salary){
      this.name = name;
      this.salary = salary;
    }
  }
  
  class Manager extends Employee{
    constructor(name, salary, bonus){
      super(name, salary)
      this.bonus = bonus;
    }
  }
  
  const company = new Company();
  const e1 = new Employee("Pedro", 2300)
  const e2 = new Employee("Juan", 3500)
  console.log(e1)
  const m1 = new Manager("Maria", 5000, 2500)
  console.log(m1)
  company.addEmployees(e1, e2, m1);
  company.generatePayroll();
  company.generatePayroll();
  company.generatePayroll();
  
  
  
  