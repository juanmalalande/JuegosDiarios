/* ============================================================
   DATOS: 66 campeones de la Copa Libertadores (1960-2025)
   Planteles curados con jugadores reales de cada campaña.
   Posiciones: POR (arquero), DEF, MED, DEL
   Este archivo define: POS, la función P(), y el array TEAMS.
   ============================================================ */
const POS = {POR:"POR",DEF:"DEF",MED:"MED",DEL:"DEL"};

function P(n,name,pos,ovr,leg){return {n,name,pos,ovr,leg:!!leg};}

const TEAMS = [
{team:"Peñarol",country:"Uruguay",flag:"🇺🇾",year:1960,c1:"#f6d000",c2:"#0a0a0a",players:[
 P(1,"William Martínez","POR",81),P(2,"Roberto Matosas","DEF",83),P(3,"Néstor Gonçalves","DEF",85,1),
 P(4,"William Álvarez","DEF",78),P(5,"Fernando Riolfo","DEF",77),P(6,"Luis Cubilla","MED",87,1),
 P(7,"Julio César Abbadie","MED",83),P(8,"José Sasía","MED",80),P(9,"Alberto Spencer","DEL",93,1),
 P(10,"Carlos Borges","DEL",82),P(11,"Washington Ambrois","DEL",78)]},

{team:"Peñarol",country:"Uruguay",flag:"🇺🇾",year:1961,c1:"#f6d000",c2:"#0a0a0a",players:[
 P(1,"William Martínez","POR",82),P(2,"Roberto Matosas","DEF",84),P(3,"Néstor Gonçalves","DEF",86,1),
 P(4,"William Álvarez","DEF",78),P(5,"Fernando Riolfo","DEF",77),P(6,"Luis Cubilla","MED",88,1),
 P(7,"Julio César Abbadie","MED",84),P(8,"José Sasía","MED",80),P(9,"Alberto Spencer","DEL",94,1),
 P(10,"Carlos Borges","DEL",83),P(11,"Pedro Joya","DEL",78)]},

{team:"Santos",country:"Brasil",flag:"🇧🇷",year:1962,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Gilmar","POR",90,1),P(2,"Mauro Ramos","DEF",88,1),P(3,"Ítalo Rodrigues","DEF",79),
 P(4,"Calvet","DEF",77),P(5,"Lima","DEF",78),P(6,"Zito","MED",89,1),
 P(7,"Mengálvio","MED",84),P(8,"Dorval","MED",81),P(9,"Pelé","DEL",99,1),
 P(10,"Coutinho","DEL",90,1),P(11,"Pagão","DEL",79)]},

{team:"Santos",country:"Brasil",flag:"🇧🇷",year:1963,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Gilmar","POR",91,1),P(2,"Mauro Ramos","DEF",88,1),P(3,"Ítalo Rodrigues","DEF",79),
 P(4,"Calvet","DEF",77),P(5,"Lima","DEF",78),P(6,"Zito","MED",89,1),
 P(7,"Mengálvio","MED",84),P(8,"Dorval","MED",81),P(9,"Pelé","DEL",99,1),
 P(10,"Coutinho","DEL",91,1),P(11,"Pepe","DEL",87,1)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1964,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Miguel Santoro","POR",86,1),P(2,"Roberto Ferreiro","DEF",82),P(3,"Osvaldo Mura","DEF",78),
 P(4,"David Acevedo","DEF",77),P(5,"Vicente Maldonado","DEF",76),P(6,"Juan Carlos Guzmán","MED",79),
 P(7,"Raúl Bernao","MED",82,1),P(8,"Ángel D'Ascenzo","MED",79),P(9,"Oscar Decaría","DEL",81),
 P(10,"Mario Rodríguez","DEL",80),P(11,"Alberto Toriani","DEL",78)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1965,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Miguel Santoro","POR",87,1),P(2,"Roberto Ferreiro","DEF",83),P(3,"Osvaldo Mura","DEF",78),
 P(4,"David Acevedo","DEF",78),P(5,"Vicente Maldonado","DEF",77),P(6,"Juan Carlos Guzmán","MED",80),
 P(7,"Raúl Bernao","MED",84,1),P(8,"Ángel D'Ascenzo","MED",79),P(9,"Oscar Decaría","DEL",82),
 P(10,"Mario Rodríguez","DEL",81),P(11,"Alberto Toriani","DEL",79)]},

{team:"Peñarol",country:"Uruguay",flag:"🇺🇾",year:1966,c1:"#f6d000",c2:"#0a0a0a",players:[
 P(1,"Ladislao Mazurkiewicz","POR",91,1),P(2,"Roberto Matosas","DEF",83),P(3,"Néstor Gonçalves","DEF",85,1),
 P(4,"Ramón Aguerre","DEF",78),P(5,"Manuel Manicera","DEF",76),P(6,"Pedro Rocha","MED",92,1),
 P(7,"Luis Cubilla","MED",87,1),P(8,"Julio Losada","MED",79),P(9,"Alberto Spencer","DEL",94,1),
 P(10,"Pedro Joya","DEL",79),P(11,"Washington Ambrois","DEL",78)]},

{team:"Racing",country:"Argentina",flag:"🇦🇷",year:1967,c1:"#65a0dc",c2:"#ffffff",players:[
 P(1,"Agustín Cejas","POR",87,1),P(2,"Roberto Perfumo","DEF",90,1),P(3,"Alfio Basile","DEF",84,1),
 P(4,"Néstor Rossi","DEF",78),P(5,"Alfredo Rojas","DEF",77),P(6,"Humberto Maschio","MED",88,1),
 P(7,"Juan Carlos Cárdenas","MED",87,1),P(8,"Oscar Martín","MED",79),P(9,"Juan José Rodríguez","DEL",81),
 P(10,"Norberto Raffo","DEL",80),P(11,"Nelson Chabay","DEL",78)]},

{team:"Estudiantes",country:"Argentina",flag:"🇦🇷",year:1968,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Alberto Poletti","POR",83),P(2,"Oscar Malbernat","DEF",84,1),P(3,"Ramón Aguirre Suárez","DEF",86,1),
 P(4,"Eduardo Manera","DEF",80),P(5,"Néstor Togneri","DEF",77),P(6,"Carlos Bilardo","MED",85,1),
 P(7,"Carlos Pachamé","MED",83),P(8,"Juan Ramón Verón","MED",89,1),P(9,"Marcos Conigliaro","DEL",82),
 P(10,"José Hugo Medina","DEL",80),P(11,"Raúl Madero","DEL",78)]},

{team:"Estudiantes",country:"Argentina",flag:"🇦🇷",year:1969,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Alberto Poletti","POR",83),P(2,"Oscar Malbernat","DEF",85,1),P(3,"Ramón Aguirre Suárez","DEF",87,1),
 P(4,"Eduardo Manera","DEF",80),P(5,"Néstor Togneri","DEF",77),P(6,"Carlos Bilardo","MED",85,1),
 P(7,"Carlos Pachamé","MED",83),P(8,"Juan Ramón Verón","MED",90,1),P(9,"Marcos Conigliaro","DEL",82),
 P(10,"Oscar Malbernat","DEL",76),P(11,"Raúl Madero","DEL",79)]},

{team:"Estudiantes",country:"Argentina",flag:"🇦🇷",year:1970,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Alberto Poletti","POR",83),P(2,"Oscar Malbernat","DEF",85,1),P(3,"Ramón Aguirre Suárez","DEF",87,1),
 P(4,"Eduardo Manera","DEF",80),P(5,"Néstor Togneri","DEF",77),P(6,"Carlos Bilardo","MED",84,1),
 P(7,"Carlos Pachamé","MED",83),P(8,"Juan Ramón Verón","MED",90,1),P(9,"Marcos Conigliaro","DEL",83),
 P(10,"Oscar Speggiari","DEL",78),P(11,"Raúl Madero","DEL",79)]},

{team:"Nacional",country:"Uruguay",flag:"🇺🇾",year:1971,c1:"#ffffff",c2:"#4a7fc9",players:[
 P(1,"Juan Martín Mujica","POR",83),P(2,"Luis Ubiña","DEF",83),P(3,"Atilio Ancheta","DEF",82),
 P(4,"Julio Montero Castillo","DEF",85,1),P(5,"Roberto Fontes","DEF",77),P(6,"Juan Martín Mujica","MED",76),
 P(7,"Víctor Espárrago","MED",81),P(8,"Juan Masnik","MED",79),P(9,"Luis Artime","DEL",90,1),
 P(10,"Ildo Maneiro","DEL",80),P(11,"Julio Morales","DEL",78)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1972,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Miguel Santoro","POR",85,1),P(2,"Ricardo Pavoni","DEF",81),P(3,"Francisco Sá","DEF",80),
 P(4,"Pedro Marchetta","DEF",79),P(5,"Miguel Raimondo","DEF",78),P(6,"Ricardo Bochini","MED",93,1),
 P(7,"Miguel Ángel Giachello","MED",80),P(8,"Miguel Ángel López","MED",78),P(9,"Daniel Bertoni","DEL",88,1),
 P(10,"Ricardo Infante","DEL",81),P(11,"Mario Mendoza","DEL",79)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1973,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Miguel Santoro","POR",85,1),P(2,"Ricardo Pavoni","DEF",81),P(3,"Francisco Sá","DEF",80),
 P(4,"Pedro Marchetta","DEF",79),P(5,"Enzo Trossero","DEF",81,1),P(6,"Ricardo Bochini","MED",94,1),
 P(7,"Miguel Ángel Giachello","MED",80),P(8,"Miguel Ángel López","MED",78),P(9,"Daniel Bertoni","DEL",89,1),
 P(10,"Ricardo Infante","DEL",81),P(11,"Mario Mendoza","DEL",79)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1974,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Miguel Santoro","POR",85,1),P(2,"Ricardo Pavoni","DEF",81),P(3,"Francisco Sá","DEF",80),
 P(4,"Pedro Marchetta","DEF",79),P(5,"Enzo Trossero","DEF",82,1),P(6,"Ricardo Bochini","MED",94,1),
 P(7,"Miguel Ángel Giachello","MED",80),P(8,"Miguel Ángel López","MED",78),P(9,"Daniel Bertoni","DEL",89,1),
 P(10,"Ricardo Infante","DEL",82),P(11,"Mario Mendoza","DEL",79)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1975,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Miguel Santoro","POR",86,1),P(2,"Ricardo Pavoni","DEF",82),P(3,"Francisco Sá","DEF",80),
 P(4,"Pedro Marchetta","DEF",79),P(5,"Enzo Trossero","DEF",82,1),P(6,"Ricardo Bochini","MED",95,1),
 P(7,"Miguel Ángel Giachello","MED",80),P(8,"Miguel Ángel López","MED",78),P(9,"Daniel Bertoni","DEL",90,1),
 P(10,"Ricardo Infante","DEL",82),P(11,"Mario Mendoza","DEL",80)]},

{team:"Cruzeiro",country:"Brasil",flag:"🇧🇷",year:1976,c1:"#0a4bab",c2:"#ffffff",players:[
 P(1,"Raul Plassmann","POR",84,1),P(2,"Nelinho","DEF",87,1),P(3,"Piazza","DEF",86,1),
 P(4,"Zé Carlos","DEF",78),P(5,"Roberto Duarte","DEF",77),P(6,"Dirceu Lopes","MED",88,1),
 P(7,"Joãozinho","MED",83),P(8,"Vaguinho","MED",79),P(9,"Jairzinho","DEL",89,1),
 P(10,"Palhinha","DEL",83),P(11,"Natalino","DEL",78)]},

{team:"Boca Juniors",country:"Argentina",flag:"🇦🇷",year:1977,c1:"#0a3b7a",c2:"#ffce00",players:[
 P(1,"Hugo Gatti","POR",89,1),P(2,"Alberto Tarantini","DEF",87,1),P(3,"Jorge Benítez","DEF",79),
 P(4,"Rubén Suñé","DEF",78),P(5,"Roberto Mouzo","DEF",80),P(6,"Miguel Ángel Brindisi","MED",88,1),
 P(7,"Omar Larrosa","MED",81),P(8,"Carlos Salinas","MED",78),P(9,"Ángel Clemente Rojas","DEL",86,1),
 P(10,"Roberto Rogel","DEL",79),P(11,"Alberto Fren","DEL",77)]},

{team:"Boca Juniors",country:"Argentina",flag:"🇦🇷",year:1978,c1:"#0a3b7a",c2:"#ffce00",players:[
 P(1,"Hugo Gatti","POR",89,1),P(2,"Alberto Tarantini","DEF",87,1),P(3,"Jorge Benítez","DEF",79),
 P(4,"Rubén Suñé","DEF",78),P(5,"Roberto Mouzo","DEF",80),P(6,"Miguel Ángel Brindisi","MED",89,1),
 P(7,"Omar Larrosa","MED",81),P(8,"Carlos Salinas","MED",78),P(9,"Ángel Clemente Rojas","DEL",86,1),
 P(10,"Roberto Rogel","DEL",79),P(11,"Marcelo Trobbiani","DEL",80,1)]},

{team:"Olimpia",country:"Paraguay",flag:"🇵🇾",year:1979,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Rogelio Bordón","POR",81),P(2,"Delfín Benítez Cáceres","DEF",84,1),P(3,"Miguel Ángel Bernal","DEF",78),
 P(4,"Adán Amarilla","DEF",77),P(5,"Amado Ramírez","DEF",76),P(6,"Osvaldo Aquino","MED",82),
 P(7,"Miguel Ángel Garay","MED",79),P(8,"Julio César Romero","MED",87,1),P(9,"Ever Hugo Almeida","DEL",88,1),
 P(10,"Roberto Paredes","DEL",80),P(11,"Berner González","DEL",76)]},

{team:"Nacional",country:"Uruguay",flag:"🇺🇾",year:1980,c1:"#ffffff",c2:"#4a7fc9",players:[
 P(1,"Rodolfo Rodríguez","POR",87,1),P(2,"Nelson Gutiérrez","DEF",85,1),P(3,"Wilmar Cabrera","DEF",79),
 P(4,"Daniel Vidal","DEF",77),P(5,"Milton Coelho","DEF",76),P(6,"Julio Morales","MED",80),
 P(7,"Juan Blanco","MED",78),P(8,"Rubén Bareño","MED",77),P(9,"Waldemar Victorino","DEL",86,1),
 P(10,"Fernando Morena","DEL",89,1),P(11,"Ildo Maneiro","DEL",79)]},

{team:"Flamengo",country:"Brasil",flag:"🇧🇷",year:1981,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Raul","POR",82),P(2,"Leandro","DEF",88,1),P(3,"Marinho Peres","DEF",83),
 P(4,"Mozer","DEF",80),P(5,"Júnior","DEF",89,1),P(6,"Andrade","MED",82),
 P(7,"Adílio","MED",86,1),P(8,"Tita","MED",81),P(9,"Zico","DEL",97,1),
 P(10,"Nunes","DEL",83),P(11,"Lico","DEL",76)]},

{team:"Peñarol",country:"Uruguay",flag:"🇺🇾",year:1982,c1:"#f6d000",c2:"#0a0a0a",players:[
 P(1,"Óscar Aguirregaray","POR",80),P(2,"Alberto Sciavi","DEF",78),P(3,"Wilder Sánchez","DEF",77),
 P(4,"Fernando Da Silva","DEF",76),P(5,"Diego Aguirre","DEF",78,1),P(6,"Jorge Da Silva","MED",79),
 P(7,"Jorge Barrios","MED",78),P(8,"Ruben Aguirre","MED",76),P(9,"Waldemar Victorino","DEL",87,1),
 P(10,"Fernando Diogo","DEL",80),P(11,"Jorge Villazán","DEL",78)]},

{team:"Grêmio",country:"Brasil",flag:"🇧🇷",year:1983,c1:"#009de0",c2:"#0a0a0a",players:[
 P(1,"Élio","POR",81),P(2,"Mário Sérgio","DEF",80),P(3,"Da Silva","DEF",77),
 P(4,"Vilson","DEF",77),P(5,"Adãozinho","DEF",76),P(6,"Renato Gaúcho","MED",88,1),
 P(7,"Baldochi","MED",79),P(8,"Tarciso","MED",78),P(9,"Ari","DEL",80),
 P(10,"Caçapava","DEL",78),P(11,"Da Guia","DEL",76)]},

{team:"Independiente",country:"Argentina",flag:"🇦🇷",year:1984,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Rodolfo Fischer","POR",80),P(2,"Enzo Trossero","DEF",83,1),P(3,"Ricardo Giusti","DEF",84,1),
 P(4,"Daniel Sabadini","DEF",78),P(5,"Julio Villa","DEF",76),P(6,"Ricardo Bochini","MED",93,1),
 P(7,"Jorge Burruchaga","MED",89,1),P(8,"Claudio Marangoni","MED",85,1),P(9,"Roberto Pompei","DEL",81),
 P(10,"Daniel Bertoni","DEL",87,1),P(11,"Jorge García","DEL",77)]},

{team:"Argentinos Juniors",country:"Argentina",flag:"🇦🇷",year:1985,c1:"#c8102e",c2:"#ffffff",players:[
 P(1,"Enrique Vidallé","POR",84,1),P(2,"Carmelo Villalba","DEF",79),P(3,"José Pavoni","DEF",78),
 P(4,"José Luis Olguín","DEF",77),P(5,"Ricardo Domenech","DEF",76),P(6,"Jorge Videla","MED",78),
 P(7,"Sergio Batista","MED",85,1),P(8,"Ricardo Comisso","MED",78),P(9,"José 'Pepe' Castro","DEL",80),
 P(10,"Claudio 'Bichi' Borghi","DEL",87,1),P(11,"Carlos Ereros","DEL",78)]},

{team:"River Plate",country:"Argentina",flag:"🇦🇷",year:1986,c1:"#e30613",c2:"#ffffff",players:[
 P(1,"Nery Pumpido","POR",89,1),P(2,"Oscar Ruggeri","DEF",90,1),P(3,"Juan Simón","DEF",81),
 P(4,"Néstor Gorosito","DEF",80),P(5,"Roberto Gómez","DEF",77),P(6,"Norberto Alonso","MED",89,1),
 P(7,"Sergio Almirón","MED",81),P(8,"Ubaldo Fillol","MED",78),P(9,"Ramón Díaz","DEL",90,1),
 P(10,"Antonio Alzamendi","DEL",87,1),P(11,"Roberto Cabañas","DEL",86,1)]},

{team:"Peñarol",country:"Uruguay",flag:"🇺🇾",year:1987,c1:"#f6d000",c2:"#0a0a0a",players:[
 P(1,"Óscar Sonora","POR",79),P(2,"Hugo de León","DEF",85,1),P(3,"Fernando Alonso","DEF",78),
 P(4,"Gustavo Matosas","DEF",77),P(5,"Wilmar Cabrera","DEF",78),P(6,"Antonio Pacheco","MED",78),
 P(7,"Jorge Villazán","MED",79),P(8,"Ruben Da Silva","MED",76),P(9,"Diego Aguirre","DEL",83,1),
 P(10,"Herbert Puglia","DEL",78),P(11,"Wilmar Cabrera","DEL",76)]},

{team:"Nacional",country:"Uruguay",flag:"🇺🇾",year:1988,c1:"#ffffff",c2:"#4a7fc9",players:[
 P(1,"Fernando Álvez","POR",88,1),P(2,"Nelson Gutiérrez","DEF",86,1),P(3,"Óscar Perdomo","DEF",78),
 P(4,"Luis Herrera","DEF",77),P(5,"Marcelo Correa","DEF",76),P(6,"Rubén Paz","MED",87,1),
 P(7,"Antonio Alzamendi","MED",86,1),P(8,"Daniel Revelez","MED",78),P(9,"Rubén Sosa","DEL",89,1),
 P(10,"Carlos Aguilera","DEL",87,1),P(11,"Adán Ferreira","DEL",78)]},

{team:"Atlético Nacional",country:"Colombia",flag:"🇨🇴",year:1989,c1:"#1c8a3f",c2:"#ffffff",players:[
 P(1,"René Higuita","POR",89,1),P(2,"Andrés Escobar","DEF",87,1),P(3,"Luis Fernando Herrera","DEF",83,1),
 P(4,"León Alvarado","DEF",78),P(5,"Nelson Flórez","DEF",77),P(6,"Leonel Álvarez","MED",87,1),
 P(7,"Alexis García","MED",86,1),P(8,"Wílmer Cabrera","MED",79),P(9,"John Jairo Tréllez","DEL",81),
 P(10,"Albeiro Usuriaga","DEL",84,1),P(11,"Guillermo Marín","DEL",77)]},

{team:"Olimpia",country:"Paraguay",flag:"🇵🇾",year:1990,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Julio César Villalba","POR",80),P(2,"Celso Ayala","DEF",84,1),P(3,"Sciuto","DEF",77),
 P(4,"Cabañas","DEF",76),P(5,"Aquino","DEF",76),P(6,"Adriano Samaniego","MED",84,1),
 P(7,"Osvaldo Aquino","MED",80),P(8,"Buenaventura Ferreira","MED",77),P(9,"Raúl Amarilla","DEL",87,1),
 P(10,"Roberto Cabañas","DEL",85,1),P(11,"Adolfino Cañete","DEL",77)]},

{team:"Colo-Colo",country:"Chile",flag:"🇨🇱",year:1991,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Daniel Morón","POR",82),P(2,"Javier Margas","DEF",85,1),P(3,"Luis Pérez","DEF",78),
 P(4,"Miguel Ramírez","DEF",77),P(5,"Rodrigo Contreras","DEF",76),P(6,"Rubén Espinoza","MED",78),
 P(7,"Marcelo Vega","MED",78),P(8,"Waldo Bobadilla","MED",76),P(9,"Marcelo Barticciotto","DEL",86,1),
 P(10,"Hugo Farías","DEL",79),P(11,"Patricio Mardones","DEL",77)]},

{team:"São Paulo",country:"Brasil",flag:"🇧🇷",year:1992,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Zetti","POR",85,1),P(2,"Cafu","DEF",90,1),P(3,"Ronaldão","DEF",81),
 P(4,"André Luiz","DEF",78),P(5,"Pintado","DEF",77),P(6,"Raí","MED",92,1),
 P(7,"Toninho Cerezo","MED",87,1),P(8,"Palhinha","MED",80),P(9,"Müller","DEL",88,1),
 P(10,"Careca","DEL",89,1),P(11,"Ítalo","DEL",76)]},

{team:"São Paulo",country:"Brasil",flag:"🇧🇷",year:1993,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Zetti","POR",86,1),P(2,"Cafu","DEF",91,1),P(3,"Ronaldão","DEF",81),
 P(4,"André Luiz","DEF",78),P(5,"Pintado","DEF",77),P(6,"Raí","MED",93,1),
 P(7,"Toninho Cerezo","MED",87,1),P(8,"Palhinha","MED",80),P(9,"Müller","DEL",89,1),
 P(10,"Careca","DEL",89,1),P(11,"Renato","DEL",77)]},

{team:"Vélez Sarsfield",country:"Argentina",flag:"🇦🇷",year:1994,c1:"#0a3b7a",c2:"#ffffff",players:[
 P(1,"José Luis Chilavert","POR",92,1),P(2,"Roberto Trotta","DEF",86,1),P(3,"Cristian Domizzi","DEF",79),
 P(4,"Carlos Sosa","DEF",77),P(5,"Fernando Cáceres","DEF",78),P(6,"José Basualdo","MED",86,1),
 P(7,"Gustavo Bassedas","MED",81),P(8,"Omar Asad","MED",79),P(9,"Marcelo Delgado","DEL",83,1),
 P(10,"Flavio Zandoná","DEL",78),P(11,"Julio Saldaña","DEL",76)]},

{team:"Grêmio",country:"Brasil",flag:"🇧🇷",year:1995,c1:"#009de0",c2:"#0a0a0a",players:[
 P(1,"Danrlei","POR",82),P(2,"Adãozinho","DEF",78),P(3,"Cléber","DEF",77),
 P(4,"Odvan","DEF",78),P(5,"Rodrigo","DEF",76),P(6,"Arilson","MED",80),
 P(7,"Adilson Batista","MED",79),P(8,"André Luiz","MED",77),P(9,"Paulo Nunes","DEL",86,1),
 P(10,"Jardel","DEL",87,1),P(11,"Índio","DEL",77)]},

{team:"River Plate",country:"Argentina",flag:"🇦🇷",year:1996,c1:"#e30613",c2:"#ffffff",players:[
 P(1,"Germán Burgos","POR",84,1),P(2,"Roberto Ayala","DEF",89,1),P(3,"Néstor Fabbri","DEF",80),
 P(4,"Francesco Colonnese","DEF",79),P(5,"Gustavo Zapata","DEF",76),P(6,"Matías Almeyda","MED",87,1),
 P(7,"Leonardo Astrada","MED",81),P(8,"Enzo Francescoli","MED",91,1),P(9,"Ariel Ortega","DEL",90,1),
 P(10,"Hernán Crespo","DEL",90,1),P(11,"Marcelo Salas","DEL",89,1)]},

{team:"Cruzeiro",country:"Brasil",flag:"🇧🇷",year:1997,c1:"#0a4bab",c2:"#ffffff",players:[
 P(1,"Dida","POR",87,1),P(2,"Alexandre","DEF",78),P(3,"Anderson","DEF",77),
 P(4,"Marques","DEF",76),P(5,"Val Baiano","DEF",76),P(6,"Ricardinho","MED",87,1),
 P(7,"Jorginho","MED",79),P(8,"Alex","MED",78),P(9,"Elivelto","DEL",83,1),
 P(10,"Path","DEL",77),P(11,"Nonato","DEL",76)]},

{team:"Vasco da Gama",country:"Brasil",flag:"🇧🇷",year:1998,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Carlos Germano","POR",80),P(2,"Odvan","DEF",78),P(3,"Mauro Galvão","DEF",84,1),
 P(4,"Gonçalves","DEF",78),P(5,"Pedrinho","DEF",77),P(6,"Juninho Pernambucano","MED",88,1),
 P(7,"Ramon","MED",79),P(8,"Donizete","MED",77),P(9,"Edmundo","DEL",90,1),
 P(10,"Romário","DEL",95,1),P(11,"Luizão","DEL",81)]},

{team:"Palmeiras",country:"Brasil",flag:"🇧🇷",year:1999,c1:"#0a7a34",c2:"#ffffff",players:[
 P(1,"Marcos","POR",89,1),P(2,"Roque Júnior","DEF",86,1),P(3,"Cléber","DEF",79),
 P(4,"Júnior","DEF",77),P(5,"Arce","DEF",78),P(6,"Zinho","MED",84,1),
 P(7,"Alex","MED",83,1),P(8,"César Sampaio","MED",84,1),P(9,"Oséas","DEL",82,1),
 P(10,"Galeano","DEL",79),P(11,"Euller","DEL",78)]},

{team:"Boca Juniors",country:"Argentina",flag:"🇦🇷",year:2000,c1:"#0a3b7a",c2:"#ffce00",players:[
 P(1,"Óscar Córdoba","POR",87,1),P(2,"Jorge Bermúdez","DEF",85,1),P(3,"Nicolás Burdisso","DEF",80),
 P(4,"Walter Samuel","DEF",88,1),P(5,"Rolando Schiavi","DEF",84,1),P(6,"Juan Román Riquelme","MED",93,1),
 P(7,"Cristian Traverso","MED",80),P(8,"Sebastián Battaglia","MED",83,1),P(9,"Martín Palermo","DEL",89,1),
 P(10,"Marcelo Delgado","DEL",81),P(11,"Guillermo Barros Schelotto","DEL",87,1)]},

{team:"Boca Juniors",country:"Argentina",flag:"🇦🇷",year:2001,c1:"#0a3b7a",c2:"#ffce00",players:[
 P(1,"Óscar Córdoba","POR",87,1),P(2,"Jorge Bermúdez","DEF",85,1),P(3,"Nicolás Burdisso","DEF",81),
 P(4,"Walter Samuel","DEF",89,1),P(5,"Rolando Schiavi","DEF",84,1),P(6,"Juan Román Riquelme","MED",94,1),
 P(7,"Cristian Traverso","MED",80),P(8,"Sebastián Battaglia","MED",83,1),P(9,"Martín Palermo","DEL",89,1),
 P(10,"Marcelo Delgado","DEL",81),P(11,"Guillermo Barros Schelotto","DEL",87,1)]},

{team:"Olimpia",country:"Paraguay",flag:"🇵🇾",year:2002,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Aldo Bobadilla","POR",83,1),P(2,"Celso Ayala","DEF",84,1),P(3,"Delio Toledo","DEF",78),
 P(4,"Julio César Cáceres","DEF",79),P(5,"Pedro Sarabia","DEF",76),P(6,"Rodrigo Morínigo","MED",78),
 P(7,"Osvaldo Díaz","MED",77),P(8,"Jorge Achucarro","MED",78,1),P(9,"Julio Dos Santos","DEL",83,1),
 P(10,"Sergio Orteman","DEL",76),P(11,"Nelson Cuevas","DEL",81,1)]},

{team:"Boca Juniors",country:"Argentina",flag:"🇦🇷",year:2003,c1:"#0a3b7a",c2:"#ffce00",players:[
 P(1,"Roberto Abbondanzieri","POR",88,1),P(2,"Nicolás Burdisso","DEF",82),P(3,"Rolando Schiavi","DEF",85,1),
 P(4,"Julio César Serrano","DEF",78),P(5,"Cristian Traverso","DEF",80),P(6,"Fabián Vargas","MED",81),
 P(7,"Sebastián Battaglia","MED",84,1),P(8,"Matías Donnet","MED",77),P(9,"Carlos Tevez","DEL",90,1),
 P(10,"Guillermo Barros Schelotto","DEL",88,1),P(11,"Marcelo Delgado","DEL",81)]},

{team:"Once Caldas",country:"Colombia",flag:"🇨🇴",year:2004,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Juan Carlos Henao","POR",83,1),P(2,"Miguel Rojas","DEF",79),P(3,"Samuel Vanegas","DEF",78),
 P(4,"Édgar Cataño","DEF",78),P(5,"Edwin García","DEF",77),P(6,"Jhon Viáfara","MED",82,1),
 P(7,"Rubén Darío Velásquez","MED",78),P(8,"Herly Alcázar","MED",77),P(9,"Arnulfo Valentierra","DEL",79),
 P(10,"Elkin Soto","DEL",78),P(11,"Dayro Moreno","DEL",81,1)]},

{team:"São Paulo",country:"Brasil",flag:"🇧🇷",year:2005,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Rogério Ceni","POR",89,1),P(2,"Alex","DEF",84,1),P(3,"Fabão","DEF",78),
 P(4,"Renato Silva","DEF",77),P(5,"Reinaldo","DEF",76),P(6,"Josué","MED",79),
 P(7,"Danilo","MED",78),P(8,"Aloísio Correia","MED",77),P(9,"Grafite","DEL",85,1),
 P(10,"Luís Fabiano","DEL",89,1),P(11,"Amoroso","DEL",81)]},

{team:"Internacional",country:"Brasil",flag:"🇧🇷",year:2006,c1:"#c8102e",c2:"#ffffff",players:[
 P(1,"Clemer","POR",83,1),P(2,"Fabiano Eller","DEF",79),P(3,"Wellington Monteiro","DEF",78),
 P(4,"César","DEF",77),P(5,"Ceará","DEF",76),P(6,"Alex","MED",85,1),
 P(7,"Wágner","MED",78),P(8,"Índio","MED",80,1),P(9,"Fernandão","DEL",84,1),
 P(10,"Iarley","DEL",81),P(11,"Rafael Sóbis","DEL",80)]},

{team:"Boca Juniors",country:"Argentina",flag:"🇦🇷",year:2007,c1:"#0a3b7a",c2:"#ffce00",players:[
 P(1,"Guillermo Sara","POR",80),P(2,"Daniel Díaz","DEF",81),P(3,"Rolando Schiavi","DEF",85,1),
 P(4,"Hugo Ibarra","DEF",83,1),P(5,"Clemente Rodríguez","DEF",79),P(6,"Juan Román Riquelme","MED",92,1),
 P(7,"Fernando Gago","MED",85,1),P(8,"Pablo Ledesma","MED",78),P(9,"Rodrigo Palacio","DEL",85,1),
 P(10,"Martín Palermo","DEL",88,1),P(11,"Neri Cardozo","DEL",78)]},

{team:"LDU Quito",country:"Ecuador",flag:"🇪🇨",year:2008,c1:"#ffffff",c2:"#0a3b7a",players:[
 P(1,"José Francisco Cevallos","POR",83,1),P(2,"Norberto Araujo","DEF",82,1),P(3,"Paúl Ambrossi","DEF",78),
 P(4,"Neicer Reasco","DEF",78),P(5,"Isaac Mina","DEF",76),P(6,"Joffre Guerrón","MED",78),
 P(7,"Patricio Urrutia","MED",81,1),P(8,"Edison Méndez","MED",84,1),P(9,"Claudio Bieler","DEL",84,1),
 P(10,"Joao Rojas","DEL",79),P(11,"Alfredo Moreno","DEL",76)]},

{team:"Estudiantes",country:"Argentina",flag:"🇦🇷",year:2009,c1:"#d0242c",c2:"#ffffff",players:[
 P(1,"Mariano Andújar","POR",84,1),P(2,"Leandro Desábato","DEF",80),P(3,"Christian Cellay","DEF",78),
 P(4,"Israel Damonte","DEF",78),P(5,"Nicolás Spinelli","DEF",76),P(6,"Juan Sebastián Verón","MED",90,1),
 P(7,"Enzo Pérez","MED",85,1),P(8,"Nery Domínguez","MED",78),P(9,"Mauro Boselli","DEL",83,1),
 P(10,"Mariano Pavone","DEL",81,1),P(11,"Gastón Fernández","DEL",79)]},

{team:"Internacional",country:"Brasil",flag:"🇧🇷",year:2010,c1:"#c8102e",c2:"#ffffff",players:[
 P(1,"Muriel","POR",83,1),P(2,"Bolívar","DEF",83,1),P(3,"Kléber","DEF",78),
 P(4,"Índio","DEF",79,1),P(5,"Marlon","DEF",76),P(6,"Andrés D'Alessandro","MED",89,1),
 P(7,"Elton","MED",78),P(8,"Diego Guiñazú","MED",81,1),P(9,"Alecsandro","DEL",83,1),
 P(10,"Taison","DEL",84,1),P(11,"Nilmar","DEL",84,1)]},

{team:"Santos",country:"Brasil",flag:"🇧🇷",year:2011,c1:"#ffffff",c2:"#0a0a0a",players:[
 P(1,"Rafael","POR",81,1),P(2,"Durval","DEF",81,1),P(3,"Léo","DEF",78),
 P(4,"Bruno Rodrigo","DEF",77),P(5,"Danilo","DEF",83,1),P(6,"Arouca","MED",83,1),
 P(7,"Paulo Henrique Ganso","MED",87,1),P(8,"Adriano","MED",78),P(9,"Neymar","DEL",95,1),
 P(10,"Elano","DEL",83,1),P(11,"Borges","DEL",78)]},

{team:"Corinthians",country:"Brasil",flag:"🇧🇷",year:2012,c1:"#0a0a0a",c2:"#ffffff",players:[
 P(1,"Cássio","POR",87,1),P(2,"Alessandro","DEF",81,1),P(3,"Leandro Castán","DEF",85,1),
 P(4,"Chicão","DEF",83,1),P(5,"Fábio Santos","DEF",83,1),P(6,"Ralf","MED",83,1),
 P(7,"Paulinho","MED",87,1),P(8,"Elias","MED",83,1),P(9,"Emerson Sheik","DEL",84,1),
 P(10,"Jorge Henrique","DEL",78),P(11,"Paolo Guerrero","DEL",87,1)]},

{team:"Atlético Mineiro",country:"Brasil",flag:"🇧🇷",year:2013,c1:"#0a0a0a",c2:"#ffffff",players:[
 P(1,"Victor","POR",86,1),P(2,"Réver","DEF",85,1),P(3,"Leonardo Silva","DEF",84,1),
 P(4,"Marcos Rocha","DEF",79),P(5,"Richarlyson","DEF",78),P(6,"Leandro Donizete","MED",81,1),
 P(7,"Josué","MED",78),P(8,"Ronaldinho Gaúcho","MED",89,1),P(9,"Jô","DEL",83,1),
 P(10,"Bernard","DEL",83,1),P(11,"Diego Tardelli","DEL",84,1)]},

{team:"San Lorenzo",country:"Argentina",flag:"🇦🇷",year:2014,c1:"#0a3b7a",c2:"#c8102e",players:[
 P(1,"Sebastián Torrico","POR",82,1),P(2,"Marcos Angeleri","DEF",79),P(3,"Gastón Díaz","DEF",77),
 P(4,"Cristian Chávez","DEF",76),P(5,"Emmanuel Más","DEF",78),P(6,"Néstor Ortigoza","MED",84,1),
 P(7,"Ezequiel Cirigliano","MED",81,1),P(8,"Fernando Belluschi","MED",83,1),P(9,"Ángel Correa","DEL",84,1),
 P(10,"Nicolás Blandi","DEL",79),P(11,"Mauro Matos","DEL",76)]},

{team:"River Plate",country:"Argentina",flag:"🇦🇷",year:2015,c1:"#e30613",c2:"#ffffff",players:[
 P(1,"Marcelo Barovero","POR",84,1),P(2,"Jonathan Maidana","DEF",83,1),P(3,"Ramiro Funes Mori","DEF",84,1),
 P(4,"Gabriel Mercado","DEF",83,1),P(5,"Milton Casco","DEF",81,1),P(6,"Leonardo Ponzio","MED",83,1),
 P(7,"Carlos Sánchez","MED",79),P(8,"Matías Kranevitter","MED",81),P(9,"Rodrigo Mora","DEL",84,1),
 P(10,"Sebastián Driussi","DEL",81,1),P(11,"Lucas Alario","DEL",83,1)]},

{team:"Atlético Nacional",country:"Colombia",flag:"🇨🇴",year:2016,c1:"#1c8a3f",c2:"#ffffff",players:[
 P(1,"Franco Armani","POR",87,1),P(2,"Alexis Henríquez","DEF",80),P(3,"Daniel Bocanegra","DEF",78),
 P(4,"Farid Díaz","DEF",78),P(5,"Andrés Felipe Román","DEF",77),P(6,"Alejandro Guerra","MED",83,1),
 P(7,"Sebastián Gómez","MED",80),P(8,"Diego Arias","MED",77),P(9,"Miguel Borja","DEL",84,1),
 P(10,"Orlando Berrío","DEL",81),P(11,"Vladimir Hernández","DEL",77)]},

{team:"Grêmio",country:"Brasil",flag:"🇧🇷",year:2017,c1:"#009de0",c2:"#0a0a0a",players:[
 P(1,"Marcelo Grohe","POR",84,1),P(2,"Léo Moura","DEF",80,1),P(3,"Pedro Geromel","DEF",84,1),
 P(4,"Walter Kannemann","DEF",83,1),P(5,"Bruno Cortez","DEF",78),P(6,"Michel","MED",80),
 P(7,"Jailson","MED",78),P(8,"Ramiro","MED",78),P(9,"Luan","DEL",86,1),
 P(10,"Everton","DEL",85,1),P(11,"Fernandinho","DEL",78)]},

{team:"River Plate",country:"Argentina",flag:"🇦🇷",year:2018,c1:"#e30613",c2:"#ffffff",players:[
 P(1,"Franco Armani","POR",88,1),P(2,"Gonzalo Montiel","DEF",81,1),P(3,"Jonatan Maidana","DEF",83,1),
 P(4,"Javier Pinola","DEF",83,1),P(5,"Milton Casco","DEF",81,1),P(6,"Leonardo Ponzio","MED",83,1),
 P(7,"Exequiel Palacios","MED",84,1),P(8,"Ignacio Fernández","MED",85,1),P(9,"Lucas Pratto","DEL",83,1),
 P(10,"Gonzalo Martínez","DEL",85,1),P(11,"Camilo Mayada","DEL",77)]},

{team:"Flamengo",country:"Brasil",flag:"🇧🇷",year:2019,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Diego Alves","POR",86,1),P(2,"Rafinha","DEF",83,1),P(3,"Rodrigo Caio","DEF",83,1),
 P(4,"Pablo Marí","DEF",81,1),P(5,"Filipe Luís","DEF",85,1),P(6,"Willian Arão","MED",82,1),
 P(7,"Éverton Ribeiro","MED",87,1),P(8,"Giorgian de Arrascaeta","MED",88,1),P(9,"Gabriel Barbosa 'Gabigol'","DEL",90,1),
 P(10,"Bruno Henrique","DEL",86,1),P(11,"Vitinho","DEL",78)]},

{team:"Palmeiras",country:"Brasil",flag:"🇧🇷",year:2020,c1:"#0a7a34",c2:"#ffffff",players:[
 P(1,"Weverton","POR",86,1),P(2,"Marcos Rocha","DEF",82,1),P(3,"Gustavo Gómez","DEF",85,1),
 P(4,"Luan Garcia","DEF",78),P(5,"Diogo Barbosa","DEF",78),P(6,"Felipe Melo","MED",84,1),
 P(7,"Zé Rafael","MED",81,1),P(8,"Gabriel Menino","MED",82,1),P(9,"Rony","DEL",83,1),
 P(10,"Luiz Adriano","DEL",83,1),P(11,"Raphael Veiga","DEL",85,1)]},

{team:"Palmeiras",country:"Brasil",flag:"🇧🇷",year:2021,c1:"#0a7a34",c2:"#ffffff",players:[
 P(1,"Weverton","POR",87,1),P(2,"Marcos Rocha","DEF",82,1),P(3,"Gustavo Gómez","DEF",86,1),
 P(4,"Luan Garcia","DEF",78),P(5,"Joaquín Piquerez","DEF",81,1),P(6,"Danilo","MED",80),
 P(7,"Zé Rafael","MED",82,1),P(8,"Gabriel Menino","MED",82,1),P(9,"Rony","DEL",84,1),
 P(10,"Deyverson","DEL",81,1),P(11,"Raphael Veiga","DEL",86,1)]},

{team:"Flamengo",country:"Brasil",flag:"🇧🇷",year:2022,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Santos","POR",82),P(2,"Rafinha","DEF",83,1),P(3,"David Luiz","DEF",86,1),
 P(4,"Léo Pereira","DEF",83,1),P(5,"Filipe Luís","DEF",84,1),P(6,"Thiago Maia","MED",79),
 P(7,"Éverton Ribeiro","MED",86,1),P(8,"Giorgian de Arrascaeta","MED",88,1),P(9,"Gabriel Barbosa 'Gabigol'","DEL",89,1),
 P(10,"Pedro","DEL",86,1),P(11,"Marinho","DEL",79)]},

{team:"Fluminense",country:"Brasil",flag:"🇧🇷",year:2023,c1:"#7a1e2b",c2:"#0a5c2b",players:[
 P(1,"Fábio","POR",85,1),P(2,"Samuel Xavier","DEF",78),P(3,"Nino","DEF",83,1),
 P(4,"Marlon","DEF",79),P(5,"Marcelo","DEF",85,1),P(6,"André","MED",84,1),
 P(7,"Martinelli","MED",79),P(8,"Paulo Henrique Ganso","MED",85,1),P(9,"Germán Cano","DEL",87,1),
 P(10,"Jhon Arias","DEL",84,1),P(11,"Keno","DEL",78)]},

{team:"Botafogo",country:"Brasil",flag:"🇧🇷",year:2024,c1:"#0a0a0a",c2:"#ffffff",players:[
 P(1,"John","POR",81),P(2,"Alexander Barboza","DEF",83,1),P(3,"Bastos","DEF",81,1),
 P(4,"Alex Telles","DEF",83,1),P(5,"Adryelson","DEF",78),P(6,"Gregore","MED",82,1),
 P(7,"Marlon Freitas","MED",81,1),P(8,"Thiago Almada","MED",86,1),P(9,"Luiz Henrique","DEL",84,1),
 P(10,"Tiquinho Soares","DEL",83,1),P(11,"Igor Jesus","DEL",80)]},

{team:"Flamengo",country:"Brasil",flag:"🇧🇷",year:2025,c1:"#c8102e",c2:"#0a0a0a",players:[
 P(1,"Agustín Rossi","POR",85,1),P(2,"Danilo","DEF",83,1),P(3,"Léo Pereira","DEF",84,1),
 P(4,"Alex Sandro","DEF",84,1),P(5,"Ayrton Lucas","DEF",81,1),P(6,"Gerson","MED",85,1),
 P(7,"Erick Pulgar","MED",82,1),P(8,"Giorgian de Arrascaeta","MED",87,1),P(9,"Bruno Henrique","DEL",84,1),
 P(10,"Pedro","DEL",87,1),P(11,"Luiz Araújo","DEL",81)]}
];
TEAMS.forEach((t,i)=>t.id=i);
