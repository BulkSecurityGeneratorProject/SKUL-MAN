package com.afrologix.skulman.repository;

import com.afrologix.skulman.domain.Etablissement;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Etablissement entity.
 */
@SuppressWarnings("unused")
public interface EtablissementRepository extends JpaRepository<Etablissement,Long> {

}
