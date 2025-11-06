#include <stdio.h>  
class inicioPAM {
public:
    void ReglamentoPOO() {
        printf("\n REGLAMENTO POO \n");
        printf("1. Se requiere 80%% de asistencia para tener derecho a evaluacion parcial y 80%% de trabajos en clase.\n");
        printf("2. Se permiten 10 minutos de tolerancia y si el alumno llega despues de este tiempo puede permanecer en la clase,\n");
        printf("   pero no se tomara la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).\n");
        printf("3. Las faltas deben justificarse mediante correo institucional maximo 24 horas posteriores a la falta con el tutor.\n");
        printf("   Solo se aceptan recetas medicas y citatorios juridicos.\n");
        printf("4. Las tareas y trabajos deben subirse a Classroom de forma individual y no se reciben extemporaneas,\n");
        printf("   salvo justificante validado por el tutor.\n");
        printf("5. Las tareas deben presentarse en tiempo y forma. Retrasos sin justificante valido no se aceptan.\n");
        printf("6. Usar el correo institucional para trabajar bajo Google Classroom.\n");
        printf("7. El plagio o copia de trabajos/examenes implica reprobar la asignatura y reporte al area correspondiente.\n");
        printf("8. Cualquier deshonestidad academica sera sancionada reprobando el parcial sin derecho a examen final.\n");
        printf("9. Indisciplina o falta de respeto:\n");
        printf("   - 1ra vez: llamada de atencion.\n");
        printf("   - 2da vez: debe abandonar el aula.\n");
        printf("   - 3 incidencias: sin derecho a examen final o parcial.\n");
        printf("10. Uso de laptops/moviles solo para actividades requeridas.\n");
        printf("11. Prohibido el uso de audifonos durante la clase.\n");
        printf("12. Prohibido comer o tomar liquidos en el salon.\n");
        printf("13. Prohibido sentarse en mesas o columpiarse en sillas.\n");
        printf("14. Todo tema academico debe revisarse primero con el docente,\n");
        printf("    luego con tutor, coordinacion de tutores y finalmente direccion.\n");
        printf("15. Situaciones no previstas: acudir directamente a la direccion del programa.\n");
        printf("16. El dia de entrega de calificaciones todos deben estar presentes.\n");
        printf("17. Este reglamento entra en vigor tras ser firmado o aceptado por mayoria en la primera sesion.\n");
    }
    void LineamientosClassroom() {
        printf("\n Lineamientos de Classroom\n");
        printf("- entregar los trabajos en tiempo y forma\n");
        printf("- entregar los reportes en PDF\n");
        printf("- retrasos autorizados, se califican con 5 como maximo\n\n");
    }
    void FechasdeParciales() {
        printf("\n Fechas de Parciales\n");
        printf("1er parcial        30-09-25\n");
        printf("2do parcial        04-10-25\n");
        printf("3er parcial        02-12-25\n");
        printf("Finales            08-12-25\n");
    }
    void PorcentajesporParcial() {
        printf("\n Porcentajes por Parcial\n");
        printf("                             1p         2p         3p\n");
        printf("Evidencia de conocimiento   40%%       40%%       20%%\n");
        printf("Evidencia de desempeño      20%%       20%%       10%%\n");
        printf("Evidencia de producto       30%%       20%%       40%%\n");
        printf("Proyecto integrador         10%%       20%%       30%%\n");
    }
};

int main() {
    inicioPAM clase; 
    int opcion;     

    do {
        printf("\n MENU INICIO PAM \n");
        printf("1. Reglamento POO\n");
        printf("2. Lineamientos Classroom\n");
        printf("3. Fechas de Parciales\n");
        printf("4. Porcentajes por Parcial\n");
        printf("0. Salir\n");
        printf("Seleccione una opcion: ");
        scanf("%d", &opcion);

        switch(opcion) {
            case 1: clase.ReglamentoPOO(); break;
            case 2: clase.LineamientosClassroom(); break;
            case 3: clase.FechasdeParciales(); break;
            case 4: clase.PorcentajesporParcial(); break;
            case 0: printf("\nSaliendo del programa...\n"); break;
            default: printf("\nOpcion no valida\n");
        }
    } while(opcion != 0);

    return 0;
}

