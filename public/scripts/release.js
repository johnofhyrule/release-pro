/* --------- BOOTSRAP JS SWITCH TABS -------- */
$('#pills-tab a').on('click', function (e) {
    e.preventDefault()
    console.log('trigger!!', $(this).tab('show'))
    $(this).tab('show')
})

// $('#pills-tab a').on('click', function (e) {
//     e.preventDefault()
//     $('#pills-tab a[href="#pills-featuresownerdoc"]').tab('show')
// })

// $('#pills-tab a').on('click', function (e) {
//     e.preventDefault()
//     $('#pills-tab a[href="#pills-calendar"]').tab('show')
// })

// $('#pills-tab a').on('click', function (e) {
//     e.preventDefault()
//     $('#pills-tab a[href="#pills-profile"]').tab('show')
// })

/* --------- HANDSONTABLE JS SPREADSHEET DATA -------- */
let data = [
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

let container = document.getElementById('example');
let hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
});