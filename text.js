var array_day = new Array("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
 
var array_month = new Array ("Styczeń", "Luty", "Marsz", "Kwiecień", "Może", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień");
 
var win = '1500zl karta podarunkowa Biedronka'; 
var win_brand = ''; 
var win_box = 'ixs_box.png'; 
var title = 'Znajdź 1500zl karta podarunkowa Biedronka';
var o = '#00a0d6'; 
var a = "o.png"; 
var a2 = "m_w.png"; 
var b = "Biedronka konkurs, tylko dziś: <span class='date_day_number'></span> <span class='date_month'></span>";
var d = "Drogi Użytkowniku,"; 
var e = "każdy <span class = 'date_day_week'> </span> wybieramy 6 szczęśliwców, którzy otrzymują szansę wygrania <span class = 'w'> </span>."; 
var g = "Aby wygrać, wybierz właściwe pudełko z prezentem."; 
var h = "Odnaleźć <span class='w'></span>"; 
 
var j = "osób lubi to"; 
var k = 4281; 
var m_l = "Lubię to!"; // Like for comments
var l = ""; 
var w = ""; 
 
// modal 1
var m_1_i = 'card.png'; 
var m_1_t = 'Konkurs Biedronka'; 
var m_1_d = [{ 
    "1": "Gratulacje, klient Biedronka!",
    "2": "In the competition sponsored by Biedronka you can win a  <strong> <span class = 'w'> </span></strong>.",
    "3": "Wystarczy wybrać właściwe pudełko z prezentem.",
    "4": "<strong> Masz 3 próby. Powodzenia! </strong>",
}];
var m_1_b = 'OK'; 
 
 
var m_2_i = 's.png'; 
var m_2_d_2 = '(2) próbuje';
var m_2_d_1 = '(1) próbuje';
var m_2_d = 'Przepraszamy, Twoje pudełko jest puste. Nadal pozostały Ci <span id = "try"> </span>. Powodzenia!'; 
var m_2_b = 'OK'; 
 
var m_3_i = 'card.png';
var m_3_t = 'Gratulacje!'; 
var m_3_s = '(1) <span class = "w_b"> </span> <span class = "w"> </span> Zarezerwowano '; 
var m_3_d = [{ 
    "1": "1. Kliknij przycisk poniżej.",
    "2": "2. Dokładnie wypełnij następną stronę informacji o wysyłce i dane kontaktowe.",
    "3": "3. Twój <strong> <span class = 'w'> </span></strong> zostanie wysłany w ciągu 2 dni roboczych."
}];
var m_3_b = 'Odbierz prezent'; 
 
var i = [{
    "1": {
        "name": "Katarzyna Janson",
        "likes": "",
        "time": "4 Minuty",
        "comment": {
            "1": "Dziś dostałam swojego <span class = 'w_b'> </span> <span class = 'w'> </span> Strasznie się cieszę!",       }
    },
    "2": {
        "name": "Jarek Piotrowski",
        "likes": "",
        "time": "5 Minuty",
        "comment": {
            "1": "Kurczę, coś mi nie poszło... Mogę jeszcze raz?",
        }
    },
    "3": {
        "name": "Joanna Tomala",
        "likes": "",
        "time": "11 Minuty",
        "comment": {
            "1": "Dziś odebrałam, dzięki!",
        }
    },
    "4": {
        "name": "Filip Orłowski",
        "likes": "",
        "time": "15 Minuty",
        "comment": {
            "1": "Wygrałem! <span class='w_b'></span> <span class='w'></span>! Łuuuuuuuu",
        }
    },
    "5": {
        "name": "Patrycja Engel",
        "likes": "",
        "time": "38 Minuty",
        "comment": {
            "1": "Super sprawa, nie mogę się doczekać telefonu!",
        }
    },
    "6": {
        "name": "Wioletta Andrzejczak",
        "likes": "",
        "time": "42 Minuty",
        "comment": {
            "1": ":(:( Naprawdę go chciałam! To nie fair!",
        }
    }
}];

