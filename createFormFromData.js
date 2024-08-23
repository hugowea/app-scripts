function createFormFromData() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист4"); // ПОМЕНЯТЬ Лист4 на название листа, в котором таблица
  
  var form = FormApp.create("For Digital Profile").setDescription("Dear Buddy! You have spent the whole wonderful week with group of your freshers! No doubts, they impressed you! Please write some comments about each of your freshers! You can do it yourself or together with your partner! ");

  var data = sh.getDataRange().getValues();
 
  var buddySelect = form.addMultipleChoiceItem();
  buddySelect.setTitle('Your name');

  
  var pageBreak = form.addPageBreakItem();
  pageBreak.setHelpText("Thank you for your comments! Tutorship program for freshers is opening now! It lasts one autumn semester. All our 319 team and your freshers will be very glad to continue interaction with you during this program! For additional info please write to @Leisan_I");


  var buddyChoices = []
  for (var i = 24; i < data.length; i++) { // ПОМЕНЯТЬ 24 на другое число - (ряд, с которого начинаются строчки, минус 1)
    var buddyName = data[i][0];

    var buddySection = form.addPageBreakItem().setTitle("Group " + (i + 1 - 24)).setHelpText('Please write some comments about each of your freshers').setGoToPage(pageBreak); // ПОМЕНЯТЬ 24 на другое число - (ряд, с которого начинаются строчки, минус 1)

    for (var j = 1; j < data[i].length; j++) {
      if (data[i][j].length > 0) {
        form.addParagraphTextItem().setTitle(data[i][j])
      }
    }

    buddyChoices.push(buddySelect.createChoice(buddyName, buddySection));
  }
  buddySelect.setChoices(buddyChoices);


}
