/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/

var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0

Text[0]=["Me Email","Click here to send me an email "]
Text[1]=["Home Page","Click here to go to my Web site."]
Text[2]=["This is the title","Well How do you find this Tip message to be?"]
Text[3]=["Right","This tip Is right positioned"]
Text[4]=["Recuerda que:","Podemos personalizar o variar la altura, añadir accesorios, luces, etc."]
Text[5]=["Left","This tip Is left positioned"]
Text[6]=["Float","This tip Is float positioned at a (10,10) coordinate, It also floats with the scrollbars so it is always static"]
Text[7]=["Fixed","This tip Is fixed positioned at a (1,1) coordinate"]
Text[8]=["Para Profesionales","Obten un 5% de descuento<BR>al hacer tus oferta On Line<BR>Esta oferta no tiene ningun compromiso<BR><A href='http://www.exposistema.com/pag-internas/presupuesto.php'>____ .PIDELA AQUI. ______</A>"]
Text[9]=["keep style","This sticks around the mouse"]
Text[10]=["Left coordinate control","This tip is right positioned with a 40 X coordinate "]
Text[11]=["Top coordinate control","This tip is right positioned with a 50 Y coordinate"]
Text[12]=["Visual effects","This tip has a Shadow and is Transparent a little and also has a random Transition applied to it "]
Text[13]=["Profesionales","Obten 5% a un 15% de descuento.<BR>🏆 Date de alta como Profesional.<BR>Busca la sección Mayoristas.<BR>"]
Text[14]=["This is The title","this is the text"]
Text[15]=["","Precio sin IVA"]
Text[16]=["","Some Lists <li>list one</li> <li>list two</li> <li>list three</li> <li>list four</li>"]


Style[0]=["white","black","#000099","#E8E8FF","","","","","","","","","","",200,"",2,2,10,10,51,1,0,"",""]
Style[1]=["white","black","#000","#E8E8FF","","","right","","","","center","","","2",200,"",1,2,10,10,"","","","",""]
Style[2]=["white","black","#000099","#E8E8FF","","","","","","","left","","","",200,"",2,2,10,10,"","","","",""]
Style[3]=["white","black","#000099","#E8E8FF","","","","","","","float","","","",200,"",2,2,10,10,"","","","",""]
Style[4]=["white","black","#000099","#E8E8FF","","","","","","","fixed","","","",200,"",2,2,1,1,"","","","",""]
Style[5]=["white","white","#EB6B19","#033067","","","","","","","","sticky","2","2",325,"",2,2,10,10,"","","","",""]
Style[6]=["white","black","#000099","#E8E8FF","","","","","","","","keep","","",200,"",2,8,10,10,"","","","",""]
Style[7]=["white","black","#000099","#E8E8FF","","","","","","","","","","",200,"",2,2,40,10,"","","","",""]
Style[8]=["white","black","#000099","#E8E8FF","","","","","","","","","","",200,"",2,2,10,50,"","","","",""]
Style[9]=["white","black","#000099","#E8E8FF","","","","","","","","","","",200,"",2,2,10,10,51,0.5,75,"simple","gray"]
Style[10]=["white","black","black","white","","","right","","Verdana","normal","center","",2,4,280,130,1,20,10,0,50,1,80,"complex","gray"]
Style[11]=["white","black","#000099","#E8E8FF","","","","","","","","","","",200,"",2,2,10,10,51,0.5,45,"simple","gray"]
Style[12]=["white","black","#000","#E8E8FF","","","","","","","","","","2",115,"",1,2,10,10,"","","","",""]

applyCssFilter()

