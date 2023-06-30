import java.util.Scanner;

public class Circle {
    private double area;
    private double perimeter;
    private double radius;

    public void set(double radius) {
        this.radius = radius;
    }

    public void set() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите радиус круга: ");
        this.radius = scanner.nextDouble();
    }

    public void circle_area() {
        this.area = Math.PI * this.radius * this.radius;
    }

    public void circle_perimeter() {
        this.perimeter = 2 * Math.PI * this.radius;
    }

    public void show() {
        System.out.println("Радиус: " + this.radius);
        System.out.println("Площадь: " + this.area);
        System.out.println("Периметр: " + this.perimeter);
    }

    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.set();
        circle.circle_area();
        circle.circle_perimeter();
        circle.show();
    }
}
