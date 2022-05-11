class Cars {
    constructor(reg, arrival) {
        this._reg = reg;
        this._arrival = arrival;
        this._departure;
        this._totalCost;
        this._amountPaid = 0;
        this._costPerHour = 1.5;
        this._hasPaid = false;
        this._parkingTime = 0;
    }
    departure(time) {
        this._departure = time;
        this._totalCost = (this._departure - this._arrival) * this._costPerHour;
        this._parkingTime = this._departure - this._arrival;
    }
    payParking(payment) {
        if (this._amountPaid < this._totalCost) {
            this._amountPaid = this._amountPaid + payment;
            if (this._amountPaid >= this._totalCost) {
                this._hasPaid = true;
            }
        }
    }
    exit() {
        if (this._hasPaid) {
            console.log("Thanks for visiting");
        }
    }
}

const AA1AAA = new Cars("AA1AAA", 5);

class Staff extends Cars {
    constructor(reg, arrival) {
        super(reg, arrival);
        this.staffNumber = 111;
        this._wallet = 100;
    }
    discount(staffNumber) {
        if (staffNumber == 111) {
            this._totalCost = this._totalCost / 2;
        }
    }
    payement() {
        this._wallet = this._wallet - this._totalCost;
    }
}
const thomas = new Staff("PE11 2UN", 5);
console.log(thomas);

thomas.departure(10);
thomas.discount(111);
thomas.payement();
console.log(thomas);