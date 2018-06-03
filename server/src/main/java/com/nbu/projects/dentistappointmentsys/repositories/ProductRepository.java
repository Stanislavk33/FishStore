package com.nbu.projects.dentistappointmentsys.repositories;

        import java.util.Set;

        import com.nbu.projects.dentistappointmentsys.models.Product;
        import com.nbu.projects.dentistappointmentsys.models.types.ProductCategory;
        import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Set<Product> findAllByName(String name);

    Set<Product> findAllByCategory(ProductCategory productCategory);

/*    @Query(value = "select new com.nbu.projects.dentistappointmentsys.controllers.models.AmbulatoryInfo(u.firstName, u.lastName, a.date, a.comment)" +
            "from Appointment a, User u where a.patientId = :id and u.id = a.user.id and a.comment is not null and a.comment <> '' and a.date < :now")
    List<AmbulatoryInfo> getAmbulatoryInfo(@Param("id") Long id, @Param("now") Timestamp now);

    @Query(value = "select distinct new com.nbu.projects.dentistappointmentsys.controllers.models.PatientResults(u.id, u.firstName, u.lastName, u.rating, " +
            "(select count(a) from Appointment a where a.patientId = u.id and a.user.id = :id)) " +
            "from User u, Appointment a where u.id = a.patientId and a.user.id = :id")
    List<PatientResults> getPatients(@Param("id") Long id);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.DentistAppointmentModel(a.id, a.user.id, a.patientId, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.user.id = :id and u.id = a.patientId and a.date < :now")
    List<DentistAppointmentModel> getDentistPastAppointments(@Param("id") Long id, @Param("now") Timestamp now);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.DentistAppointmentModel(a.id, a.user.id, a.patientId, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.user.id = :id and u.id = a.patientId and a.date > :now")
    List<DentistAppointmentModel> getDentistFutureAppointments(@Param("id") Long id, @Param("now") Timestamp now);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.PatientAppointmentModel(a.id, a.patientId, a.user.id, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.patientId = :id and u.id = a.user.id and a.date > :now")
    List<PatientAppointmentModel> getPatientFutureAppointments(@Param("id") Long id, @Param("now") Timestamp now);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.PatientAppointmentModel(a.id, a.patientId, a.user.id, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.patientId = :id and u.id = a.user.id and a.date < :now")
    List<PatientAppointmentModel> getPatientPastAppointments(@Param("id") Long id, @Param("now") Timestamp now);
    Appointment findById(Long id);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.DentistAppointmentModel(a.id, a.user.id, a.patientId, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.user.id = :id and a.patientId = :patientId and u.id = :patientId and a.date < :now")
    List<DentistAppointmentModel> getCommonAppointments(@Param("id") Long id, @Param("patientId") Long patientId, @Param("now") Timestamp now);

    @Transactional
    @Modifying
    @Query("update Appointment a set a.comment = :comment where a.id = :id")
    void updateAppointmentComment(@Param("id") Long id, @Param("comment") String comment);*/

}