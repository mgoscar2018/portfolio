public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hola Mundo!");

        System.out.println(countUniqueCharacters("laamb is correct"));
    }

    public static int countUniqueCharacters(String input) {
        boolean[] isItThere = new boolean[Character.MAX_VALUE];
        for (int i = 0; i < input.length(); i++) {
            isItThere[input.charAt(i)] = true;
        }
        System.out.println("ISTHER=>"+isItThere.length);
    
        int count = 0;
        for (int i = 0; i < isItThere.length; i++) {
            if (isItThere[i] == true){
                count++;
            }
        }
    
        return count;
    }
}
