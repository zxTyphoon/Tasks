package Task3;

import java.time.LocalDate;

public class User {

    private String firstName;
    private String lastName;
    private String name;
    private LocalDate lastLogin;
    private boolean isActive;
    private int age;
    private int ageGroup;

    public User(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastLogin = LocalDate.now();
        this.isActive = true;
        this.age = age;
        this.setName();
        this.setAgeGroup();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
        setName();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
        setName();
    }

    public String getName() {
        return name;
    }

    private void setName() {
        this.name = this.firstName + " " + this.lastName;
    }

    public LocalDate getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(LocalDate lastLogin) {
        this.lastLogin = lastLogin;
    }

    public boolean isActive() {
        this.setActive(this.getLastLogin().isAfter(LocalDate.now().minusYears(1)));
        return isActive;
    }

    private void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
        this.setAgeGroup();
    }

    public String getAgeGroup() {
        return switch (this.ageGroup) {
            case 1 -> "child";
            case 2 -> "teen";
            case 3 -> "adult";
            case 4 -> "senior";
            default -> "unknown";
        };
    }

    private void setAgeGroup() {
        if (this.age <= 12) {
            this.ageGroup = 1;
        } else if (this.age > 12 && this.age <= 19) {
            this.ageGroup = 2;
        } else if (this.age > 19 && this.age <= 64) {
            this.ageGroup = 3;
        } else {
            this.ageGroup = 4;
        }
    }
}
