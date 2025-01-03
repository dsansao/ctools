package com.clinical.ctools.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;


@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        
        String absolutePath = Paths.get("ng/ctools/dist/ctools/browser").toAbsolutePath().toString();
        registry.addResourceHandler("/**")
                .addResourceLocations("file:" + absolutePath + "/");
        System.out.println("Static resources path: " + absolutePath);
    }
}