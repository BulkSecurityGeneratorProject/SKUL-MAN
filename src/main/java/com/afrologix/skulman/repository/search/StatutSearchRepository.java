package com.afrologix.skulman.repository.search;

import com.afrologix.skulman.domain.Statut;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Statut entity.
 */
public interface StatutSearchRepository extends ElasticsearchRepository<Statut, Long> {
}
