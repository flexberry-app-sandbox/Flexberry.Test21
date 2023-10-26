package Test2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Room
 */
@Entity(name = "IISTest2Room")
@Table(schema = "public", name = "Room")
public class Room {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Id")
    private Integer id;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zdanie")
    @Convert("Zdanie")
    @Column(name = "Здание", length = 16, unique = true, nullable = false)
    private UUID _zdanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zdanie", insertable = false, updatable = false)
    private Zdanie zdanie;


    public Room() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getId() {
      return id;
    }

    public void setId(Integer id) {
      this.id = id;
    }


}