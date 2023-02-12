let year, city, sport, country, cityMessage, age, sportMessage, athlete, ageMessage;

year = prompt('What year were you born?');
city = prompt('What city do you live in?');
sport = prompt('What is your favorite sport?');

if (year) {
    age = 2023 - Number(year);
    ageMessage = 'You are ' + age + ' years old.';
}
else {
    ageMessage = "It's a pity that you didn't share with us your age.";
}

if (city) {
    if (city == 'Kyiv') {
        country = 'Ukraine';
    }
    else if (city == 'Washington') {
        country = 'USA';
    }
    else if (city == 'London') {
        country = 'England';
    }
    else {
        country = false;
    }
    
    if (country == false) {
        cityMessage = 'You live in ' + city + '.';
    }
    else {
        cityMessage = 'You live in the capital of ' + country + '.';
    }
}
else {
    cityMessage = "It's a pity that you didn't share with us your city.";
}

if (sport) {
    if(sport == 'Football') {
        athlete = 'Lionel Messi';
    }
    else if(sport == 'Tennis') {
        athlete = 'Serena Williams';
    }
    else if(sport == 'Boxing') {
        athlete = 'Volodymyr Klychko';
    }

    sportMessage = 'Cool! Do you want to become ' + athlete + '?';
}
else {
    sportMessage = "It's a pity that you didn't share with us your favorite sport.";
}

message = ageMessage + '\n' + cityMessage + '\n' + sportMessage;
alert(message);