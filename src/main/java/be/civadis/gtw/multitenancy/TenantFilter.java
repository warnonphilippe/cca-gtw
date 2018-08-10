package be.civadis.gtw.multitenancy;

import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;

/**
 * Filtre permettant d'extraire le tenant courant de l'url
 */
public class TenantFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        //extraire le tenantId du param tenant de l'url (si url : login?tenant=tenantId)
        String[] realms = request.getParameterValues("realm");

        try {
            if (realms != null && realms.length > 0){
                TenantContext.setCurrentTenant(realms[0]);
            }
            chain.doFilter(request, response);

        } finally {
            TenantContext.clear();
        }

    }



}
