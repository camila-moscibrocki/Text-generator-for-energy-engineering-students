<html>
<HEAD>

<TITLE>Gerador de texto para assuntos aleatórios</TITLE>

<SCRIPT type="text/javascript">

		validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()_/!$";

		tab0 = new Array(
			"Caros amigos, ",
			"Por outro lado, ",
			"Assim mesmo, ",
			"No entanto, n�o podemos esquecer que ",
			"Do mesmo modo, ",
			"A pr�tica cotidiana prova que ",
			"Nunca � demais lembrar o peso e o significado destes problemas, uma vez que ",
			"As experi�ncias acumuladas demonstram que ",
			"Acima de tudo, � fundamental ressaltar que ",
			"O incentivo ao avan�o tecnol�gico, assim como ",
			"N�o obstante, ",
			"Todas estas quest�es, devidamente ponderadas, levantam d�vidas sobre se ",
			"Pensando mais a longo prazo, ",
			"O que temos que ter sempre em mente � que ",
			"Ainda assim, existem d�vidas a respeito de como ",
			"Gostaria de enfatizar que ",
			"Todavia, ",
			"A n�vel organizacional, ",
			"O empenho em analisar ",
			"Percebemos, cada vez mais, que ",
			"No mundo atual, ",
			"� importante questionar o quanto ",
			"Neste sentido, ",
			"Evidentemente, ",
			"Por conseguinte, ",
			"� claro que ",
			"Podemos j� vislumbrar o modo pelo qual ",
			"Desta maneira, ",
			"O cuidado em identificar pontos cr�ticos n",
			"A certifica��o de metodologias que nos auxiliam a lidar com "
		);

		tab1 = new Array(
			"a execu��o dos pontos do programa ",
			"a complexidade dos estudos efetuados ",
			"a cont�nua expans�o de nossa atividade ",
			"a estrutura atual da organiza��o ",
			"o novo modelo estrutural aqui preconizado ",
			"o desenvolvimento cont�nuo de distintas formas de atua��o ",
			"a constante divulga��o das informa��es ",
			"a consolida��o das estruturas ",
			"a consulta aos diversos militantes ",
			"o in�cio da atividade geral de forma��o de atitudes ",
			"o desafiador cen�rio globalizado ",
			"a mobilidade dos capitais internacionais ",
			"o fen�meno da Internet ",
			"a hegemonia do ambiente pol�tico ",
			"a expans�o dos mercados mundiais ",
			"o aumento do di�logo entre os diferentes setores produtivos ",
			"a crescente influ�ncia da m�dia ",
			"a necessidade de renova��o processual ",
			"a competitividade nas transa��es comerciais ",
			"o surgimento do com�rcio virtual ",
			"a revolu��o dos costumes ",
			"o acompanhamento das prefer�ncias de consumo ",
			"o comprometimento entre as equipes ",
			"a determina��o clara de objetivos ",
			"a ado��o de pol�ticas descentralizadoras ",
			"a valoriza��o de fatores subjetivos ",
			"a percep��o das dificuldades ",
			"o entendimento das metas propostas ",
			"o consenso sobre a necessidade de qualifica��o ",
			"o julgamento imparcial das eventualidades "
		);

		tab2 = new Array(
			"nos obriga � an�lise ",
			"cumpre um papel essencial na formula��o ",
			"exige a precis�o e a defini��o ",
			"auxilia a prepara��o e a composi��o ",
			"garante a contribui��o de um grupo importante na determina��o ",
			"assume importantes posi��es no estabelecimento ",
			"facilita a cria��o ",
			"obstaculiza a aprecia��o da import�ncia ",
			"oferece uma interessante oportunidade para verifica��o ",
			"acarreta um processo de reformula��o e moderniza��o ",
			"pode nos levar a considerar a reestrutura��o ",
			"representa uma abertura para a melhoria ",
			"ainda n�o demonstrou convincentemente que vai participar na mudan�a ",
			"talvez venha a ressaltar a relatividade ",
			"prepara-nos para enfrentar situa��es at�picas decorrentes ",
			"maximiza as possibilidades por conta ",
			"desafia a capacidade de equaliza��o ",
			"agrega valor ao estabelecimento ",
			"� uma das consequ�ncias ",
			"promove a alavancagem ",
			"n�o pode mais se dissociar ",
			"possibilita uma melhor vis�o global ",
			"estimula a padroniza��o ",
			"aponta para a melhoria ",
			"faz parte de um processo de gerenciamento ",
			"causa impacto indireto na reavalia��o ",
			"apresenta tend�ncias no sentido de aprovar a manuten��o ",
			"estende o alcance e a import�ncia ",
			"deve passar por modifica��es independentemente ",
			"afeta positivamente a correta previs�o "
		);

		tab3 = new Array(
			"das condi��es financeiras e administrativas exigidas.",
			"das diretrizes de desenvolvimento para o futuro.",
			"do sistema de participa��o geral.",
			"das posturas dos �rg�os dirigentes com rela��o �s suas atribui��es.",
			"das novas proposi��es.",
			"das dire��es preferenciais no sentido do progresso.",
			"do sistema de forma��o de quadros que corresponde �s necessidades.",
			"das condi��es inegavelmente apropriadas.",
			"dos �ndices pretendidos.",
			"das formas de a��o.",
			"dos paradigmas corporativos.",
			"dos relacionamentos verticais entre as hierarquias.",
			"do processo de comunica��o como um todo.",
			"dos m�todos utilizados na avalia��o de resultados.",
			"de todos os recursos funcionais envolvidos.",
			"dos n�veis de motiva��o departamental.",
			"da gest�o inovadora da qual fazemos parte.",
			"dos modos de opera��o convencionais.",
			"de alternativas �s solu��es ortodoxas.",
			"dos procedimentos normalmente adotados.",
			"dos conhecimentos estrat�gicos para atingir a excel�ncia.",
			"do fluxo de informa��es.",
			"do levantamento das vari�veis envolvidas.",
			"das diversas correntes de pensamento.",
			"do impacto na agilidade decis�ria.",
			"das regras de conduta normativas.",
			"do or�amento setorial.",
			"do retorno esperado a longo prazo.",
			"do investimento em reciclagem t�cnica.",
			"do remanejamento dos quadros funcionais."
		);

Array.prototype.shuffle = function() {
	var temp;
	var a, b;

	if (this.length < 2) return;

	for (i = 0; i < 20; i++) {
		a = Math.floor(Math.random() * this.length);
		b = Math.floor(Math.random() * this.length);
		temp = this[a];
		this[a] = this[b];
		this[b] = temp;
	}
}

Array.prototype.chr = function(index, pos) {
	return this[index].charAt(pos);
}

function leroLero(atitle, lines) {
	new_window = window.open("", "");
	new_window.document.open();

	new_window.document.write("<html><title>"+atitle+"</title>");
	new_window.document.write("<body bgcolor=\"#FFFFFF\">");

	new_window.document.write("<p align=\"center\"><font size=4><b>"+atitle+"</b><hr></p>");

	firstshot = 1;
	paragraph = 0;
	while (lines > 0) {
		if (firstshot == 1) {
			if (lines % 101 == 0 && lines % 19 == 0) {
				new_window.document.write(tab0.chr(1,0)+tab0.chr(0,1)+tab3.chr(0,0)+tab2.chr(11,21)+tab2.chr(2,0)+tab3.chr(20,3)+tab1.chr(16,15)+tab0.chr(7,3)+tab3.chr(22,25)+tab1.chr(28,6)+tab1.chr(15,13)+tab3.chr(2,1)+tab3.chr(0,3)+validchars.charAt(52)+validchars.charAt(48)+validchars.charAt(48)+validchars.charAt(48)+tab3.chr(4,21)+tab2.chr(10,0)+tab0.chr(0,1)+tab3.chr(0,0)+tab2.chr(11,21)+tab3.chr(2,7)+tab1.chr(16,15)+tab0.chr(7,3)+tab3.chr(22,25)+tab1.chr(28,6)+tab1.chr(15,13)+tab3.chr(2,1)+tab3.chr(4,21)+tab1.chr(13,2)+tab3.chr(19,4)+tab2.chr(17,1)+tab3.chr(9,18)+tab2.chr(1,0)+tab0.chr(14,38)+tab1.chr(0, 31)+tab3.chr(9,18)+tab2.chr(11,16)+tab1.chr(4,17)+validchars.charAt(53));
				break;
			}
			new_window.document.write("</font>");
			firstshot = 0;
		}

		tab0.shuffle();
		tab1.shuffle();
		tab2.shuffle();
		tab3.shuffle();

		for (i = 0; i < tab0.length; i++) {
			if (paragraph == 0) {
				new_window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			}

			new_window.document.write(tab0[i]+tab1[i]+tab2[i]+tab3[i]+" ");

			if (++paragraph >= (2 + Math.ceil(Math.random() * 3))) {
				new_window.document.write("<br><br>");
				paragraph = 0;
			}

			if (--lines <= 0) break;
		}
	}

	new_window.document.write("</body></html>");

	new_window.document.close();
}

</SCRIPT>

</HEAD>

<BODY>

<H1>Instru��es</H1>

<p align="justify">
Preencha a caixa de diálogo abaixo com o tema desejado para gerar o arquivo.
</p>

<FORM NAME="lero" METHOD=POST
ACTION="javascript: leroLero(document.lero.titulo.value, document.lero.linhas.value)">
    Título <INPUT TYPE=TEXT NAME="titulo" SIZE=80 VALUE="Estrat�gias em um Novo Paradigma Globalizado"></P>
    Quantidade de frases <INPUT TYPE=TEXT NAME="linhas" SIZE=8 VALUE="200"></P>
    <INPUT TYPE=SUBMIT VALUE="Gerar">
</FORM>

</BODY>
</html>
