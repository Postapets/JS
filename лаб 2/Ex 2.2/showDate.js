/*Функция, получающая актуальную дату и выводящая ее на экран*/

function showDate() {

			var date, day, month, year, currentDate;
				date=new Date();	     // получение полной информации о текущей дате 
				day=date.getDate();      // номер дня месяца
				month=date.getMonth()+1; // номер месяца, отсчитывается от нуля
				year=date.getFullYear(); // год четырьмя цифрами
							// формирование строки для вывода, плюс — конкатенация 
			    currentDate = day + "-" + month + "-" + year;
							// вывод строки в документ
				document.write(("<u>" + day + "</u>" + "-" + month + "-" + year).bold().fontsize(5).fontcolor("purple"));
		}