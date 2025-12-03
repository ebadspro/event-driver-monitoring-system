package backend.controller;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import io.prometheus.client.Counter;

@Service
public class Consumer {

    public final Counter messageCounter;

    public Consumer() {
        messageCounter = Counter.build()
                .name("consumed_messages_total")
                .help("Total number of consumed messages")
                .register();
    }

    @KafkaListener(topics = "home-event", groupId = "group_id")
    public void consume(String message) {
        System.out.println("Consumed Home message:" + message);
        // System.out.print(topics + message);
        messageCounter.inc();
    }

    @KafkaListener(topics = "courses", groupId = "group_id")
    public void consumeCourse(String message) {
        System.out.println("Consumed course message: " + message);
        messageCounter.inc();
    }


    @KafkaListener(topics = "students", groupId = "group_id")
    public void consumeStudents(String message) {
        System.out.println("Consumed students message: " + message);
        messageCounter.inc();
    }

    @KafkaListener(topics = "services", groupId = "group_id")
    public void consumeServices(String message) {
        System.out.println("Consumed services message: " + message);
        messageCounter.inc();
    }
}
