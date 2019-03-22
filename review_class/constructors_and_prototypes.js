function Vehicle(occupancy, maxSpeed, fuelType, doors, color){
    this.occupancy = occupancy;
    this.maxspeed = maxSpeed;
    this.fuelType = fuelType;
    this.doors = doors;
    this.color = color;
    this.currentSpeed = 0;
    this.accelerate = function(number){
        this.currentSpeed = number;
    }

}

const tesla = new Vehicle(5, 300, "electricuty", 4, "black");
console.log(tesla);
tesla.accelerate(10);
console.log(tesla.currentSpeed);