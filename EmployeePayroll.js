
class EmployeePayroll {
    constructor() {
        this._name = "";
        this._id = "";
        this._salary = "";
    this._department = "";
    this._gender = "";
    this._notes = "";
    this._profilePic = "";
    }
    get name() {
        return this._name;
    } 

    get id() {
        return this._id;
    }

    get salary() {
        return this._salary;
    }

    get department() {
        return this._department;
    }

    get gender() {
        return this.gender;
    }

    get notes() {
        return this._notes;
      } 

    get profilePic() {
        return this._profilePic;
      }

      set name(name) {
        this._name = name;
      }
    
      set id(id) {
        this._id = id;
      }
    
      set salary(salary) {
        this._salary = salary;
      }
    
      set department(department) {
        this._department = department;
      }
    
      set gender(gender) {
        this._gender = gender;
      }
    
      set notes(notes) {
        this._notes = notes;
      }
    
      set profilePic(profilePic) {
        this._profilePic = profilePic;
      }
}

window.addEventListener('DOMContentLoaded', (event) {
    const name = document.querySelector(#name);
    const textError = document.querySelector('text-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }
        catch (e) {
            textError.textContent = e;
        }
    });
     const salary = document.querySelector('#salary');
     const output = document.querySelector('salary-Output');
     output.textContent = salary.value;
     salary.addEventListener('input', function() {
       output.textContent = salary.value;
    })
})

const save = () {
    try {
        let employeePayrollData = createEmployeePayroll();
    }
    catch (e) {
        return;
    }
}

const createEmployeePayroll = () {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('name=profile').pop();
    employeePayrollData.gender = getSelectedValues('name=gender').pop();
    employeePayrollData.department = getSelectedValues('name=department').pop();
    employeePayrollData.salary = getSelectedValues('#salary');
    employeePayrollData.notes = getSelectedValues('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date = date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue)=> {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked)selItems.push(item.value);
    });
    return selItems;
}

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }
    catch (e) {
        return;
    }
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayroll"));
    if(employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    }
    else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', 'january');
    setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    })
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
