        package backend.config;

        import org.springframework.context.annotation.Bean;
        import org.springframework.context.annotation.Configuration;
        import org.springframework.web.servlet.config.annotation.CorsRegistry;
        import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

        @Configuration
        public class CorsConfig implements WebMvcConfigurer {

                @Bean
                public WebMvcConfigurer corsConfigurer() {
                return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                        registry.addMapping("/producer/api/home-event")
                                .allowedOrigins("http://localhost:3000")
                                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                                .allowedHeaders("*")
                                .allowCredentials(true);
                
                
                        registry.addMapping("/producer/api/students")
                                .allowedOrigins("http://localhost:3000")
                                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                                .allowedHeaders("*")
                                .allowCredentials(true);
                        

                        registry.addMapping("/producer/api/courses")
                                .allowedOrigins("http://localhost:3000")
                                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                                .allowedHeaders("*")
                                .allowCredentials(true);

                        registry.addMapping("/producer/api/services")
                                .allowedOrigins("http://localhost:3000")
                                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                                .allowedHeaders("*")
                                .allowCredentials(true);
                        }
                };
        }   


        }
