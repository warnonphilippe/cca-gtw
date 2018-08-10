package be.civadis.gtw.multitenancy;


import be.civadis.gtw.security.oauth2.AuthorizationHeaderUtil;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

/**
 * Permet de rechercher le tenant courant
 * Recherche dans la secu spring puis dans le TenantContext
 */
public class TenantUtils {

    public static final String TENANT_PATH_VAR = "{realm}";
    public static final String TENANT_PATH_PREFIX = "realms";

    public static String getTenant(){

        //recherche dans la secu
        if (SecurityContextHolder.getContext().getAuthentication() != null){
            //si on est loggé, on extrait le token
            if (AuthorizationHeaderUtil.getAuthorizationHeader() != null
                && AuthorizationHeaderUtil.getAuthorizationHeader().isPresent()){
                    String token = AuthorizationHeaderUtil.getAuthorizationHeader().get();
                    if (token != null){
                        //on extrait le tenant du token
                        return TokenDecoder.getInstance().getTenant(token);
                    }
            }
        }

        //si pas dans le secu, recherche dans le TenantContext
        return Optional.ofNullable(TenantContext.getCurrentTenant()).orElse(null);
    }

}
