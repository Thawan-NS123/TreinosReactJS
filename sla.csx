public bool corPrimeria (string cor1, string cor2) {

    bool msg = true; 

    if(cor1 == "azul"      && cor2 == "vermelho" || cor2 == "azul"      && cor1 == "vermelho" ||
       cor1 == "amarelo"   && cor2 == "azul"     || cor2 == "amarelo"   && cor1 == "azul"     ||
       cor1 == "vermelho"  && cor2 == "amarelo"  || cor2 == "vermelho"  && cor1 == "amarelo" ){
        msg = true;
    } 
    
    else{
        msg = false;
    }

    return msg;
}
 public void Main() {
    try{

        Console.WriteLine ("Cor Primaria"); 

        Console.WriteLine ("Informe a primeria cor"); 
        string a = Console.ReadLine(); 

        Console.WriteLine ("Informe a segunda cor");
        string b = Console.ReadLine();

        bool x = corPrimeria(a ,b);
        Console.WriteLine(x);

    } catch(Exception ex){
        Console.WriteLine("TA ERRADO");
        Console.WriteLine(ex.Message);
    } 
}

Main();