
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

