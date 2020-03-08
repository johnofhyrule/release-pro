var data = [
    ['Teams & Features', 'Slack Channel', 'Engineering Manager', 'Product Manager', 'Tech Lead', 'iOS Dev', 'Android Dev', 'QE', 'Product Spec', 'Tech Spec', 'Testing Spec', 'Main Pull Requests'],
    [],
    ['RIDER',],
    ['Onboarding', '#pax-onboarding', 'Marco', 'Eric', 'Kenneth', 'Jason', 'Ryan'],
    ['Request', '#request', 'Jonathan', 'Kenny', 'Jill', 'Shawn', 'Andy'],
    ['Payment', '#payment', 'Isha', 'Ivan', 'Slava', 'Tori', 'Thomas'],
    [],
    ['DRIVER',],
    ['Onboarding', '#drv-onboarding', 'Dalton', 'Gustav', 'Shelly', 'Sai', 'Billy'],
    ['Ride', '#ride', 'Helen', 'Jared', 'Ben', 'Steve', 'Grace'],
    ['Payout', '#payout', 'Chris', 'Pete', 'Dolly', 'Steph', 'Brady'],
];

var container = document.getElementById('example');
var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
});