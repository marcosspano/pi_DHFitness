'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      full_name: 'Beltrano da Silva',
      email: 'beltrano@beltrano.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Vanessa da Mata',
      email: 'vanessa@vanessa.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Adenevaldo Preguiça',
      email: 'adenevaldo@adenevaldo.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Mariangela Marinho',
      email: 'mariangela@mariangela',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Aluno dos Santos',
      email: 'aluno@aluno.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Mais um Aluno da Silva',
      email: 'maisum@maisum.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Carlos Nome Completo',
      email: 'carlos@carlos.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Verônica Malhada',
      email: 'veronica@veronica.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Shirley Muller',
      email: 'shirley@shirley.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Presuntinho Queiroz',
      email: 'presuntinho@presuntinho.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Patinhas Donald',
      email: 'patinhas@patinhas.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Pernalonga Esperto',
      email: 'pernalonga@pernalonga.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Papaléguas Lento',
      email: 'papaleguas@papaleguas.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Dino da Silva Sauto',
      active: true,
      deleted: false,
      email: 'dino@dino.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Baby Atrapalhado',
      email: 'baby@baby.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Márcia Tomaz',
      email: 'marcia@marcia.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Alexandra Matoso',
      email: 'alexandra@alexandra.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Viviane Caracol',
      email: 'viviane@viviane.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Sheila Santos',
      email: 'sheila@sheila.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Pedro Viana',
      email: 'pedro@pedro.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Wander de Jesus',
      email: 'wander@wander.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Tereza Cristina',
      email: 'tereza@tereza.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Ruth Boazinha',
      email: 'ruth@ruth.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Raquel Maléfica',
      email: 'raquel@raquel.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Malévola Santa',
      email: 'malevola@malevola.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Branca de Neve',
      email: 'branca@branca.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Mário Bross',
      email: 'mario@mario.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Dominique Cega',
      email: 'dominique@dominique.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Maria Estela',
      email: 'maria@maria.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name:'Alessandra Medeiros',
      email: 'alessandra@alessandra.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Alessa Santanna',
      email: 'alessa@alessa.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Marcos Figueiredo',
      email: 'marcos@marcos.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Alexandre Frota',
      email: 'alexandre@alexandre.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Carla Perez',
      email: 'carla@carla.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Lula Molusco',
      email: 'lula@lula.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Patrick Rosa',
      email: 'patrick@patrick.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Bob Esponja',
      email: 'bob@bob.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Carlos Drumond de Andrade',
      email: 'carlos@carlos.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Charlie Brown',
      email: 'charlie@charlie.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Arhur Tufink',
      email: 'arthur@arthur.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Letícia FaberCastell',
      email: 'leticia@leticia.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Luana Longa',
      email: 'luana@luana.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Ítalo Azeredo',
      email: 'italo@italo.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Leonardo Da Vinci',
      email: 'leonardo@leonardo.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Gabriel Pensador',
      email: 'gabriel@gabriel.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Fernanda Montenegro',
      email: 'fernanda@fernanda.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Maria Betânia',
      email: 'maria@maria.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Carlos Anderson',
      email: 'anderson@anderson.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Lili Caramelo',
      email: 'lili@lili.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Edu Flocos',
      email: 'edu@edu.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Maycon Gomes',
      email: 'maycon@maycon.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Rafael Lisboa',
      email: 'rafael@rafael.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Cyrlan Marques',
      email: 'cyrlan@cyrlan.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Veruska Melo',
      email: 'veruska@veruska.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Daniele Melo',
      email: 'daniele@daniele.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Tatiana Sequelada',
      email: 'tatiana@tatiana.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Thiago Amaral',
      email: 'thiago@thiago.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Tiago Nogueira',
      email: 'tiago@tiago.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Dina Silva',
      email: 'dina@dina.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Fernanda Gaivota',
      email: 'gaivota@gaivota.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Antônio Gordin',
      email: 'antonio@antonio.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Sabrina Lira',
      email: 'sabrina@sabrina.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Sabryna Filó',
      email: 'sabryna@sabryna.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Armando Temporal',
      email: 'armando@armando.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Dalila Santos',
      email: 'dalila@dalila.com',
      active: false,
      deleted: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Sansão Cabeludo',
      email: 'sansao@sansao.com',
      active: false,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Dalianne Patrícia',
      email: 'dalianne@dalianne.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Patrícia Paty',
      email: 'patricia@patricia.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Hebert Viana',
      email: 'hebert@hebert.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Renato Russo',
      email: 'renato@renato.com',
      active: false,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Robson Caetano',
      email: 'robson@robson.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Caetano Veloso',
      email: 'caetano@caetano.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Pri Velloso',
      email: 'pri@pri.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Hugo Kamache',
      email: 'hugo@hugo.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Emanuele Gravin',
      email: 'emanuele@emanuele.com',
      active: false,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Manu de Manu',
      email: 'manu@manu.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Anabelle Inocente',
      email: 'anabelle@anabelle.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Felippe Codorna',
      email: 'felippe@felippe.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Aurora Boreal',
      email: 'aurora@aurora.com',
      active: false,
      deleted: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Israel Madeira',
      email: 'israel@israel.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Bruna Panplona',
      email: 'bruna@bruna.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Nancy Pereira',
      email: 'nancy@nancy.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Antônio Fagundes',
      email: 'fagundes@fagundes.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Sancler Oliveira',
      email: 'sancler@sancler.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Maria do Bairro',
      email: 'bairro@bairro.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Cruela dos Santos',
      email: 'cruela@cruela.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Nívea Cheirosa',
      email: 'nivea@nivea.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Lívia Alicia',
      email: 'livia@livia.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Oswaldo Montes',
      email: 'oswaldo@oswaldo.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Odair Fagundes',
      email: 'odair@odair.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Michel Fabiano',
      email: 'michel@michel.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Fabiano Lima',
      email: 'fabiano@fabiano.com',
      active: false,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Julio Salerno',
      email: 'julio@julio.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Julia Teixeira',
      email: 'julia@julia.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Tulio Maravilha',
      email: 'tulio@tulio.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Lúcio Sabino',
      email: 'lucio@lucio.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Daniele Sabino',
      email: 'sabino@sabino.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Denner Elivelton',
      email: 'denner@denner.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Wellington Lima',
      email: 'wellington@wellington.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Layane Loureiro',
      email: 'layane@layane.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Bianca Barros',
      email: 'bianca@bianca.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Tay Roberta',
      email: 'tay@tay.com',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};