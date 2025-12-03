package backend.controller;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/producer/api")
public class Producer {

    private static final String TOPIC1 = "home-event";
    private static final String TOPIC2 = "students";
    private static final String TOPIC3 = "course";
    private static final String TOPIC4 = "services";

    private static final String BOOTSTRAP_SERVERS = "192.168.100.13:9092";

    private final KafkaProducer<String, String> kafkaProducer;

    public Producer() {
        java.util.Properties props = new java.util.Properties();
        props.put("bootstrap.servers", BOOTSTRAP_SERVERS);
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        this.kafkaProducer = new KafkaProducer<>(props);
    }

    @PostMapping("/home-event")
    public void sendHomeInnerMessage(@RequestBody String message) {
        ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC1, "home-event", message);
        kafkaProducer.send(record, (metadata, exception) -> {
            if (metadata != null) {
                System.out.println("Sent message to topic: " + metadata.topic() + " partition: " + metadata.partition());
            } else {
                System.err.println("Error sending message: " + metadata);
            }
        });  
    }
    

    
    @PostMapping("/students")
    public void sendToStudentsMessage(@RequestBody String message) {
        ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC2, "students", message);
        kafkaProducer.send(record, (metadata, exception) -> {
            if (metadata != null) {
                System.out.println("Sent message to topic: " + metadata.topic() + " partition: " + metadata.partition());
            } else {
                System.err.println("Error sending message: " + metadata);
            }
        });  
    }

    
    @PostMapping("/courses")
    public void sendToCoursesMessage(@RequestBody String message) {
        ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC3, "courses", message);
        kafkaProducer.send(record, (metadata, exception) -> {
            if (metadata != null) {
                System.out.println("Sent message to topic: " + metadata.topic() + " partition: " + metadata.partition());
            } else {
                System.err.println("Error sending message: " + metadata);
            }
        });  
    }

    
    @PostMapping("/services")
    public void sendToServicesMessage(@RequestBody String message) {
        ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC1, "services", message);
        kafkaProducer.send(record, (metadata, exception) -> {
            if (metadata != null) {
                System.out.println("Sent message to topic: " + metadata.topic() + " partition: " + metadata.partition());
            } else {
                System.err.println("Error sending message: " + metadata);
            }
        });  
    }

}
