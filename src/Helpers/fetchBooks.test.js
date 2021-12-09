import { fetchBooks } from './fetchBooks';

test('should return books array', () => {
    const returnedData = [
        {
            id: 2086,
            book_author: ['Ανώνυμος'],
            book_title: 'Ο Αλέξανδρος ο Μακεδών',
            book_publication_year: 1529,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 104,
        },
        {
            id: 2060,
            book_author: ['Ανώνυμος'],
            book_title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
            book_publication_year: 1548,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 32,
        },
        {
            id: 2087,
            book_author: ['Ανώνυμος'],
            book_title: 'Ο Αλέξανδρος ο Μακεδών',
            book_publication_year: 1553,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 104,
        },
        {
            id: 2061,
            book_author: ['Ανώνυμος'],
            book_title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των Ρωμαίων μεγάλου Βελισαρίου',
            book_publication_year: 1554,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 0,
        },
        {
            id: 2062,
            book_author: ['Ανώνυμος'],
            book_title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
            book_publication_year: 1562,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 32,
        },
        {
            id: 2063,
            book_author: ['Ανώνυμος'],
            book_title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
            book_publication_year: 1567,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 28,
        },
        {
            id: 2065,
            book_author: ['Αχέλης, Αντώνιος'],
            book_title: 'Βιβλίον --- περιέχον της Μάλτας πολιορκίαν',
            book_publication_year: 1571,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 84,
        },
        {
            id: 2064,
            book_author: ['Ανώνυμος'],
            book_title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
            book_publication_year: 1577,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 32,
        },
        {
            id: 2088,
            book_author: ['Ανώνυμος'],
            book_title: 'Ο Αλέξανδρος ο Μακεδών',
            book_publication_year: 1600,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 92,
        },
        {
            id: 2089,
            book_author: ['Ανώνυμος'],
            book_title: 'Ο Αλέξανδρος ο Μακεδών',
            book_publication_year: 1603,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 92,
        },
        {
            id: 2066,
            book_author: ['Πολίτης, Ματθαίος'],
            book_title: 'Βίος Δημητρίου Βασιλέως Μοσχοβίας',
            book_publication_year: 1612,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 24,
        },
        {
            id: 2079,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title:
                'Πόνησις Χριστοφόρου του Αγγέλου Έλληνος του πολλών πληγών και Μαστίγων γευσαμένου αδίκως παρά των Τούρκων διά την εις Χριστόν Πίστιν',
            book_publication_year: 1617,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Οξφόρδη',
            book_pages: 12,
        },
        {
            id: 2080,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title:
                'A Grecian who tasted of many stripes and torments inflicted by the Turkes for the faith',
            book_publication_year: 1617,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Οξφόρδη',
            book_pages: 16,
        },
        {
            id: 2076,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title:
                'A Grecian who tasted of many stripes and torments inflicted by the Turkes for the faith',
            book_publication_year: 1618,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Οξφόρδη',
            book_pages: 16,
        },
        {
            id: 2069,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title:
                'Εγχειρίδιον περί της καταστάσεως των σήμερον ευρισκομένων Ελλήνων',
            book_publication_year: 1619,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Καίμπριτζ',
            book_pages: 70,
        },
        {
            id: 2075,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title: 'Enchiridion de institutis Graecorum',
            book_publication_year: 1619,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Καίμπριτζ',
            book_pages: 64,
        },
        {
            id: 2084,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title:
                'A Grecian who tasted of many stripes and torments inflicted by the Turkes for the faith',
            book_publication_year: 1620,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Λονδίνο',
            book_pages: 18,
        },
        {
            id: 2090,
            book_author: ['Ανώνυμος'],
            book_title: 'Ο Αλέξανδρος ο Μακεδών',
            book_publication_year: 1620,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 126,
        },
        {
            id: 2083,
            book_author: ['Άγγελος, Χριστόφορος (†1638)'],
            book_title:
                'Of the conditions of the life in which the Greekes now live',
            book_publication_year: 1625,
            book_publication_country: 'Αγγλία',
            book_publication_city: 'Λονδίνο',
            book_pages: 10,
        },
        {
            id: 2091,
            book_author: ['Ανώνυμος'],
            book_title: 'Ο Αλέξανδρος ο Μακεδών',
            book_publication_year: 1630,
            book_publication_country: 'Ιταλία',
            book_publication_city: 'Βενετία',
            book_pages: 126,
        },
    ];
    return fetchBooks().then((books) => {
        expect(books).toEqual(returnedData);
        // console.log(data);
    });
});
