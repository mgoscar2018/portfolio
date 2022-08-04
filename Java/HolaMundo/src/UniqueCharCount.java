import java.util.HashMap;
import java.util.Map;

public class UniqueCharCount {
  
  public static void main(String[] args) {
    String palabra = "OscarMirandaGomez".toLowerCase();
    Map<Character, Integer> mapa = new HashMap<Character,Integer>();
    for (int i=0; i<palabra.length(); i++) {
      System.out.println("LETRA="+palabra.charAt(i));
      Integer valor = mapa.get(palabra.charAt(i));
      if (valor == null)
        mapa.put(palabra.charAt(i), 1);
      else 
        mapa.put(palabra.charAt(i), ++valor);
    }

    System.out.println("TAMAÑO="+mapa.size());
    mapa.forEach((k,v) -> System.out.println("Key: " + k + ": Value: " + v));
  }
}
