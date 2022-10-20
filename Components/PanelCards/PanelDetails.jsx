const panelDetails = [
    {
        id: 1,
        image: '/DigitalOcean.svg',
        serverStatus: 'Operational',
        fe: true,
        be: true,
        db: false,
    },
    {
        id: 2,
        image: '/DigitalOcean.svg',
        serverStatus: 'Downtime',
        fe: true,
        be: true,
        db: true,
    },
    {
        id: 3,
        image: '/Cloudflare.svg',
        serverStatus: 'Downtime',
        fe: true,
        be: true,
        db: true,
    },
    {
        id: 4,
        image: '/aws.svg',
        serverStatus: 'Downtime',
        fe: true,
        be: true,
        db: true,
    },
    {
        id: 5,
        image: '/DigitalOcean.svg',
        serverStatus: 'Downtime',
        fe: true,
        be: false,
        db: true,
    },
    {
        id: 6,
        image: '/azure.svg',
        serverStatus: 'Downtime',
        fe: true,
        be: false,
        db: true,
    },
];

export default panelDetails;
