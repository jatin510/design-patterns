enum Department {
  Engineering = 'Engineering',
  Marketing = 'Marketing',
  Accounting = 'Accounting',
}

interface IEmployee {
  getDepartment(): Department;
  getSalary(): number;
  getName(): string;
}

class MarketingManager implements IEmployee {
  getDepartment(): Department {
    return Department.Marketing;
  }
  getSalary(): number {
    return 10000;
  }

  getName(): string {
    return 'Marketer 1';
  }
}

class SoftwareEngineer implements IEmployee {
  getDepartment(): Department {
    return Department.Engineering;
  }
  getSalary(): number {
    return 100000;
  }

  getName(): string {
    return 'Software Engineer 1';
  }
}

class AccountingManager implements IEmployee {
  getDepartment(): Department {
    return Department.Accounting;
  }
  getSalary(): number {
    return 40000;
  }

  getName(): string {
    return 'Accountant 1';
  }
}

class OrganizationFactory {
  private organizationName: string;
  private employees: IEmployee[] = [];

  constructor(name: string) {
    this.organizationName = name;
  }

  public get name(): string {
    return this.organizationName;
  }

  addEmployee(employeeList: IEmployee[]): void {
    this.employees = this.employees.concat(employeeList);
  }

  findEmployees(name: string): IEmployee | undefined {
    return this.employees.find((employee) => employee.getName() === name);
  }
}

const HBCFactory = new OrganizationFactory('HBC');
HBCFactory.addEmployee([new SoftwareEngineer(), new AccountingManager()]);
console.log(HBCFactory.findEmployees('Software Engineer 1')?.getDepartment());
