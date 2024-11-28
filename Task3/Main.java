package Task3;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        User[] users = new User[3];
        LocalDate withinOneYear = LocalDate.of(2024, 06, 25);
        LocalDate moreThanOneYear = LocalDate.of(2022, 06, 25);
        users[0] = new User("John", "Doe", 11);
        users[1] = new User("Jane", "Doe", 25);
        users[2] = new User("Alice", "Muller", 80);
        users[0].setLastLogin(withinOneYear);
        users[1].setLastLogin(moreThanOneYear);
        users[2].setLastLogin(withinOneYear);

        for (User user : users) {
            System.out.println(user.isActive() ? user.getName() + ", age group " + user.getAgeGroup() + " is active"
                    : user.getName() + ", age group " + user.getAgeGroup() + " is not active");
        }
    }

}
