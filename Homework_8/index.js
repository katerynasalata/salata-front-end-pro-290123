let year, city, sport, country, cityMessage, age, sportMessage, athlete, ageMessage;

year = +prompt('What year were you born?');
city = prompt('What city do you live in?');
sport = prompt('What is your favorite sport?');

if (year) {
    age = 2023 - year;
    ageMessage = 'You are ' + age + ' years old.';
}
else {
    ageMessage = "It's a pity that you didn't share with us your age.";
}

if (city) {
    if (city == 'Kyiv') {
        cityMessage = 'You live in the capital of Ukraine';
    }
    else if (city == 'Washington') {
        cityMessage = 'You live in the capital of USA';
    }
    else if (city == 'London') {
        cityMessage = 'You live in the capital of England';
    }
    else {
        cityMessage = 'You live in ' + city + '.'; 
    }
}
else {
    cityMessage = "It's a pity that you didn't share with us your city.";
}

if (sport) {
    if(sport == 'Football') {
        sportMessage = 'Cool! Do you want to become Lionel Messi?';
    }
    else if(sport == 'Tennis') {
        sportMessage = 'Cool! Do you want to become Serena Williams?';
    }
    else if(sport == 'Boxing') {
        sportMessage = 'Cool! Do you want to become Volodymyr Klychko?';
    }
    else {
        sportMessage = 'Your favourite sport is ' + sport;
    }
}
else {
    sportMessage = "It's a pity that you didn't share with us your favorite sport.";
}

message = ageMessage + '\n' + cityMessage + '\n' + sportMessage;
alert(message);