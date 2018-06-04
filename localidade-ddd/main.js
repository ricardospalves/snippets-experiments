(function(win, doc) {
  'use strict';

  const $input = doc.querySelector('[data-ddd="input"]');
  const $output = doc.querySelector('[data-ddd="output"]');

  const dddDB = [
    {
      "prefixo": 11,
      "estado": "São Paulo",
      "cidades": [
        "São Paulo",
        "Guarulhos",
        "São Bernardo do Campo",
        "Santo André",
        "Osasco",
        "Jundiaí"
      ]
    },
    {
      "prefixo": 12,
      "estado": "São Paulo",
      "cidades": [
        "São José dos Campos",
        "Taubaté",
        "Jacareí",
        "Guaratinguetá"
      ]
    },
    {
      "prefixo": 13,
      "estado": "São Paulo",
      "cidades": [
        "Santos",
        "São Vicente",
        "Praia Grande",
        "Cubatão",
        "Itanhaém",
        "Peruíbe",
        "Registro"
      ]
    },
    {
      "prefixo": 14,
      "estado": "São Paulo",
      "cidades": [
        "Bauru",
        "Jaú",
        "Marília",
        "Lençóis Paulista",
        "Lins",
        "Botucatu",
        "Ourinhos",
        "Avaré"
      ]
    },
    {
      "prefixo": 15,
      "estado": "São Paulo",
      "cidades": [
        "Sorocaba",
        "Itapetininga",
        "Itapeva"
      ]
    },
    {
      "prefixo": 16,
      "estado": "São Paulo",
      "cidades": [
        "Ribeirão Preto",
        "São Carlos",
        "Araraquara"
      ]
    },
    {
      "prefixo": 17,
      "estado": "São Paulo",
      "cidades": [
        "São José do Rio Preto",
        "Barretos",
        "Fernandópolis"
      ]
    },
    {
      "prefixo": 18,
      "estado": "São Paulo",
      "cidades": [
        "Presidente Prudente",
        "Araçatuba",
        "Birigui",
        "Assis"
      ]
    },
    {
      "prefixo": 19,
      "estado": "São Paulo",
      "cidades": [
        "Campinas",
        "Piracicaba",
        "Limeira",
        "Americana",
        "Sumaré"
      ]
    },
    {
      "prefixo": 21,
      "estado": "Rio de Janeiro",
      "cidades": [
        "Rio de Janeiro",
        "Niterói",
        "São Gonçalo",
        "Duque de Caxias",
        "Nova Iguaçu"
      ]
    },
    {
      "prefixo": 22,
      "estado": "Rio de Janeiro",
      "cidades": [
        "Campos dos Goytacazes",
        "Macaé",
        "Cabo Frio",
        "Nova Friburgo"
      ]
    },
    {
      "prefixo": 24,
      "estado": "Rio de Janeiro",
      "cidades": [
        "Volta Redonda",
        "Barra Mansa",
        "Petrópolis"
      ]
    },
    {
      "prefixo": 27,
      "estado": "Espírito Santo",
      "cidades": [
        "Vitória",
        "Serra",
        "Vila Velha",
        "Linhares"
      ]
    },
    {
      "prefixo": 28,
      "estado": "Espírito Santo",
      "cidades": [
        "Cachoeiro de Itapemirim"
      ]
    },
    {
      "prefixo": 31,
      "estado": "Minas Gerais",
      "cidades": [
        "Belo Horizonte",
        "Contagem",
        "Betim"
      ]
    },
    {
      "prefixo": 32,
      "estado": "Minas Gerais",
      "cidades": [
        "Juiz de Fora",
        "Barbacena"
      ]
    },
    {
      "prefixo": 33,
      "estado": "Minas Gerais",
      "cidades": [
        "Governador Valadares",
        "Teófilo Otoni",
        "Caratinga",
        "Manhuaçu"
      ]
    },
    {
      "prefixo": 34,
      "estado": "Minas Gerais",
      "cidades": [
        "Uberlândia",
        "Uberaba",
        "Araguari",
        "Araxá"
      ]
    },
    {
      "prefixo": 35,
      "estado": "Minas Gerais",
      "cidades": [
        "Passos",
        "Poços de Caldas",
        "Pouso Alegre",
        "Varginha",
        "Itajubá"
      ]
    },
    {
      "prefixo": 37,
      "estado": "Minas Gerais",
      "cidades": [
        "Divinópolis",
        "Itaúna",
        "Formiga",
        "Capitólio"
      ]
    },
    {
      "prefixo": 38,
      "estado": "Minas Gerais",
      "cidades": [
        "Montes Claros",
        "Serro",
        "Januária"
      ]
    },
    {
      "prefixo": 41,
      "estado": "Paraná",
      "cidades": [
        "Curitiba",
        "São José dos Pinhais",
        "Paranaguá"
      ]
    },
    {
      "prefixo": 42,
      "estado": "Paraná",
      "cidades": [
        "Ponta Grossa",
        "Castro",
        "União da Vitória"
      ]
    },
    {
      "prefixo": 43,
      "estado": "Paraná",
      "cidades": [
        "Londrina",
        "Arapongas",
        "Assaí",
        "Jacarezinho",
        "Jandaia do Sul"
      ]
    },
    {
      "prefixo": 44,
      "estado": "Paraná",
      "cidades": [
        "Maringá",
        "Campo Mourão",
        "Astorga"
      ]
    },
    {
      "prefixo": 45,
      "estado": "Paraná",
      "cidades": [
        "Cascavel",
        "Toledo",
        "Medianeira"
      ]
    },
    {
      "prefixo": 46,
      "estado": "Paraná",
      "cidades": [
        "Francisco Beltrão",
        "Pato Branco",
        "Palmas",
        "Pinhão"
      ]
    },
    {
      "prefixo": 47,
      "estado": "Santa Catarina",
      "cidades": [
        "Joinville",
        "Blumenau",
        "Balneário Camboriú"
      ]
    },
    {
      "prefixo": 48,
      "estado": "Santa Catarina",
      "cidades": [
        "Florianópolis",
        "São José",
        "Criciúma"
      ]
    },
    {
      "prefixo": 49,
      "estado": "Santa Catarina",
      "cidades": [
        "Chapecó",
        "Lages",
        "Concórdia"
      ]
    },
    {
      "prefixo": 51,
      "estado": "Rio Grande do Sul",
      "cidades": [
        "Porto Alegre",
        "Canoas",
        "Esteio",
        "Torres"
      ]
    },
    {
      "prefixo": 53,
      "estado": "Rio Grande do Sul",
      "cidades": [
        "Pelotas",
        "Rio Grande",
        "Bagé",
        "Aceguá",
        "Chuí"
      ]
    },
    {
      "prefixo": 54,
      "estado": "Rio Grande do Sul",
      "cidades": [
        "Caxias do Sul",
        "Vacaria",
        "Veranópolis"
      ]
    },
    {
      "prefixo": 55,
      "estado": "Rio Grande do Sul",
      "cidades": [
        "Santa Maria",
        "Uruguaiana",
        "Santana do Livramento"
      ]
    },
    {
      "prefixo": 61,
      "estado": "Distrito Federal\n Goiás",
      "cidades": [
        "Brasília\nLuziânia",
        "Valparaíso de Goiás",
        "Formosa"
      ]
    },
    {
      "prefixo": 62,
      "estado": "Goiás",
      "cidades": [
        "Goiânia",
        "Anápolis",
        "Luziânia",
        "Goiás",
        "Pirenópolis"
      ]
    },
    {
      "prefixo": 63,
      "estado": "Tocantins",
      "cidades": [
        "Palmas",
        "Araguaína",
        "Gurupi"
      ]
    },
    {
      "prefixo": 64,
      "estado": "Goiás",
      "cidades": [
        "Rio Verde",
        "Jataí",
        "Caldas Novas",
        "Catalão"
      ]
    },
    {
      "prefixo": 65,
      "estado": "Mato Grosso",
      "cidades": [
        "Cuiabá",
        "Várzea Grande",
        "Cáceres"
      ]
    },
    {
      "prefixo": 66,
      "estado": "Mato Grosso",
      "cidades": [
        "Rondonópolis",
        "Sinop",
        "Barra do Garças"
      ]
    },
    {
      "prefixo": 67,
      "estado": "Mato Grosso do Sul",
      "cidades": [
        "Campo Grande",
        "Dourados",
        "Corumbá",
        "Três Lagoas"
      ]
    },
    {
      "prefixo": 68,
      "estado": "Acre",
      "cidades": [
        "Rio Branco",
        "Cruzeiro do Sul"
      ]
    },
    {
      "prefixo": 69,
      "estado": "Rondônia",
      "cidades": [
        "Porto Velho",
        "Ji-Paraná",
        "Ariquemes"
      ]
    },
    {
      "prefixo": 71,
      "estado": "Bahia",
      "cidades": [
        "Salvador",
        "Camaçari",
        "Lauro de Freitas"
      ]
    },
    {
      "prefixo": 73,
      "estado": "Bahia",
      "cidades": [
        "Itabuna",
        "Ilhéus",
        "Porto Seguro",
        "Jequié"
      ]
    },
    {
      "prefixo": 74,
      "estado": "Bahia",
      "cidades": [
        "Juazeiro",
        "Xique-Xique"
      ]
    },
    {
      "prefixo": 75,
      "estado": "Bahia",
      "cidades": [
        "Feira de Santana",
        "Alagoinhas",
        "Lençóis"
      ]
    },
    {
      "prefixo": 77,
      "estado": "Bahia",
      "cidades": [
        "Vitória da Conquista",
        "Barreiras",
        "Correntina"
      ]
    },
    {
      "prefixo": 79,
      "estado": "Sergipe",
      "cidades": [
        "Aracaju",
        "Lagarto",
        "Itabaiana"
      ]
    },
    {
      "prefixo": 81,
      "estado": "Pernambuco",
      "cidades": [
        "Recife",
        "Jaboatão dos Guararapes",
        "Goiana",
        "Gravatá",
        "Paulista"
      ]
    },
    {
      "prefixo": 82,
      "estado": "Alagoas",
      "cidades": [
        "Maceió",
        "Arapiraca",
        "Palmeira dos Índios",
        "Penedo"
      ]
    },
    {
      "prefixo": 83,
      "estado": "Paraíba",
      "cidades": [
        "João Pessoa",
        "Campina Grande",
        "Patos",
        "Sousa",
        "Cajazeiras"
      ]
    },
    {
      "prefixo": 84,
      "estado": "Rio Grande do Norte",
      "cidades": [
        "Natal",
        "Mossoró",
        "Parnamirim",
        "Caicó"
      ]
    },
    {
      "prefixo": 85,
      "estado": "Ceará",
      "cidades": [
        "Fortaleza",
        "Caucaia",
        "Russas",
        "Maracanaú"
      ]
    },
    {
      "prefixo": 86,
      "estado": "Piauí",
      "cidades": [
        "Teresina",
        "Parnaíba",
        "Piripiri",
        "Campo Maior",
        "Barras"
      ]
    },
    {
      "prefixo": 87,
      "estado": "Pernambuco",
      "cidades": [
        "Petrolina",
        "Salgueiro",
        "Arcoverde"
      ]
    },
    {
      "prefixo": 88,
      "estado": "Ceará",
      "cidades": [
        "Juazeiro do Norte",
        "Crato",
        "Sobral",
        "Itapipoca",
        "Iguatu",
        "Quixadá"
      ]
    },
    {
      "prefixo": 89,
      "estado": "Piauí",
      "cidades": [
        "Picos",
        "Floriano",
        "Oeiras",
        "São Raimundo Nonato",
        "Corrente"
      ]
    },
    {
      "prefixo": 91,
      "estado": "Pará",
      "cidades": [
        "Belém",
        "Ananindeua",
        "Castanhal",
        "Abaetetuba",
        "Bragança"
      ]
    },
    {
      "prefixo": 92,
      "estado": "Amazonas",
      "cidades": [
        "Manaus",
        "Iranduba",
        "Parintins",
        "Itacoatiara",
        "Maués",
        "Borba"
      ]
    },
    {
      "prefixo": 93,
      "estado": "Pará",
      "cidades": [
        "Santarém",
        "Altamira",
        "Oriximiná",
        "Itaituba",
        "Jacareacanga"
      ]
    },
    {
      "prefixo": 94,
      "estado": "Pará",
      "cidades": [
        "Marabá",
        "Tucuruí",
        "Parauapebas",
        "Redenção",
        "Santana do Araguaia"
      ]
    },
    {
      "prefixo": 95,
      "estado": "Roraima",
      "cidades": [
        "Boa Vista",
        "Rorainópolis",
        "Caracaraí",
        "Alto Alegre",
        "Mucajaí"
      ]
    },
    {
      "prefixo": 96,
      "estado": "Amapá",
      "cidades": [
        "Macapá",
        "Santana",
        "Laranjal do Jari",
        "Oiapoque",
        "Calçoene"
      ]
    },
    {
      "prefixo": 97,
      "estado": "Amazonas",
      "cidades": [
        "Tefé",
        "Coari",
        "Tabatinga",
        "Manicoré",
        "Humaitá",
        "Lábrea"
      ]
    },
    {
      "prefixo": 98,
      "estado": "Maranhão",
      "cidades": [
        "São Luís",
        "São José de Ribamar",
        "Paço do Lumiar",
        "Pinheiro",
        "Santa Inês"
      ]
    },
    {
      "prefixo": 99,
      "estado": "Maranhão",
      "cidades": [
        "Imperatriz",
        "Caxias",
        "Timon",
        "Codó",
        "Açailândia"
      ]
    }
  ];



  $input.addEventListener('input', event => {

    const $this = event.target;
    const ddd = $this.value;

    if(ddd.length === 2) {
      const data = dddDB.find(item => item.prefixo === +ddd);

      $output.value = (data) ? `${data.prefixo} - ${data.estado} - ${data.cidades.join('/')}` : 'Não existe';
    }

    else {
      $output.value = '';
    }

  }, false);

})(window, document);
