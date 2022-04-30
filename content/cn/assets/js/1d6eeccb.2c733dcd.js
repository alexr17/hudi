"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[52427],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26227:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"Change Data Capture with Debezium and Apache Hudi",excerpt:"A review of new Debezium source connector for Apache Hudi",author:"Rajesh Mahindra",category:"blog",image:"/assets/images/blog/debezium.png"},l=void 0,c={permalink:"/cn/blog/2022/01/14/change-data-capture-with-debezium-and-apache-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-01-14-change-data-capture-with-debezium-and-apache-hudi.md",source:"@site/blog/2022-01-14-change-data-capture-with-debezium-and-apache-hudi.md",title:"Change Data Capture with Debezium and Apache Hudi",description:"As of Hudi v0.10.0, we are excited to announce the availability of Debezium sources for Deltastreamer that provide the ingestion of change capture data (CDC) from Postgres and Mysql databases to your data lake. For more details, please refer to the original RFC.",date:"2022-01-14T00:00:00.000Z",formattedDate:"January 14, 2022",tags:[],readingTime:7.28,truncated:!0,authors:[{name:"Rajesh Mahindra"}],nextItem:{title:"Apache Hudi - 2021 a Year in Review",permalink:"/cn/blog/2022/01/06/apache-hudi-2021-a-year-in-review"}},d={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",children:[],level:2},{value:"Design Overview",id:"design-overview",children:[],level:2},{value:"Apache Hudi Configurations",id:"apache-hudi-configurations",children:[{value:"Bootstrapping Existing tables",id:"bootstrapping-existing-tables",children:[],level:3},{value:"Example Implementation",id:"example-implementation",children:[],level:3},{value:"Database",id:"database",children:[],level:3},{value:"Debezium Connector",id:"debezium-connector",children:[],level:3},{value:"Hudi Deltastreamer",id:"hudi-deltastreamer",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],h={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As of Hudi v0.10.0, we are excited to announce the availability of ",(0,r.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium")," sources for ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_deltastreamer"},"Deltastreamer")," that provide the ingestion of change capture data (CDC) from Postgres and Mysql databases to your data lake. For more details, please refer to the original ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-39/rfc-39.md"},"RFC"),"."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("img",{src:"/assets/images/blog/data-network.png",alt:"drawing",width:"600"}),(0,r.kt)("p",null,"When you want to perform analytics on data from transactional databases like Postgres or Mysql you typically need to bring this data into an OLAP system such as a data warehouse or a data lake through a process called ",(0,r.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/faq/#what_is_change_data_capture"},"Change Data Capture")," (CDC). Debezium is a popular tool that makes CDC easy. It provides a way to capture row-level changes in your databases by ",(0,r.kt)("a",{parentName:"p",href:"https://debezium.io/blog/2018/07/19/advantages-of-log-based-change-data-capture/"},"reading changelogs"),". By doing so, Debezium avoids increased CPU load on your database and ensures you capture all changes including deletes."),(0,r.kt)("p",null,"Now that ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/overview/"},"Apache Hudi")," offers a Debezium source connector, CDC ingestion into a data lake is easier than ever with some ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/use_cases"},"unique differentiated capabilities"),". Hudi enables efficient update, merge, and delete transactions on a data lake. Hudi uniquely provides ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/table_types#merge-on-read-table"},"Merge-On-Read")," writers which unlock ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/how-amazon-transportation-service-enabled-near-real-time-event-analytics-at-petabyte-scale-using-aws-glue-with-apache-hudi/"},"significantly lower latency")," ingestion than typical data lake writers with Spark or Flink. Last but not least, Apache Hudi offers ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/querying_data#spark-incr-query"},"incremental queries")," so after capturing changes from your database, you can incrementally process these changes downstream throughout all of your subsequent ETL pipelines."),(0,r.kt)("h2",{id:"design-overview"},"Design Overview"),(0,r.kt)("img",{src:"/assets/images/blog/debezium.png",alt:"drawing",width:"600"}),(0,r.kt)("p",null,"The architecture for an end-to-end CDC ingestion flow with Apache Hudi is shown above. The first component is the Debezium deployment, which consists of a Kafka cluster, schema registry (Confluent or Apicurio), and the Debezium connector. The Debezium connector continuously polls the changelogs from the database and writes an AVRO message with the changes for each database row to a dedicated Kafka topic per table."),(0,r.kt)("p",null,"The second component is ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_deltastreamer"},"Hudi Deltastreamer")," that reads and processes the incoming Debezium records from Kafka for each table and writes (updates) the corresponding rows in a Hudi table on your cloud storage."),(0,r.kt)("p",null,"To ingest the data from the database table into a Hudi table in near real-time, we implement two classes that can be plugged into the Deltastreamer. Firstly, we implemented a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/83f8ed2ae3ba7fb20813cbb8768deae6244b020c/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/debezium/DebeziumSource.java"},"Debezium source"),". With Deltastreamer running in continuous mode, the source continuously reads and processes the Debezium change records in Avro format from the Kafka topic for a given table, and writes the updated record to the destination Hudi table. In addition to the columns from the database table, we also ingest some meta fields that are added by Debezium in the target Hudi table. The meta fields help us correctly merge updates and delete records. The records are read using the latest schema from the ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_deltastreamer#schema-providers"},"Schema Registry"),"."),(0,r.kt)("p",null,"Secondly, we implement a custom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/83f8ed2ae3ba7fb20813cbb8768deae6244b020c/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/AbstractDebeziumAvroPayload.java"},"Debezium Payload")," that essentially governs how Hudi records are merged when the same row is updated or deleted. When a new Hudi record is received for an existing row, the payload picks the latest record using the higher value of the appropriate column (FILEID and POS fields in MySql and LSN fields in Postgres). In the case that the latter event is a delete record, the payload implementation ensures that the record is hard deleted from the storage. Delete records are identified using the op field, which has a value of ",(0,r.kt)("strong",{parentName:"p"},"d")," for deletes."),(0,r.kt)("h2",{id:"apache-hudi-configurations"},"Apache Hudi Configurations"),(0,r.kt)("p",null,"It is important to consider the following configurations of your Hudi deployments when using the Debezium source connector for CDC ingestion."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Record Keys -")," The Hudi ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/next/indexing"},"record key(s)")," for a table should be set as the Primary keys of the table in the upstream database. This ensures that updates are applied correctly as record key(s) uniquely identify a row in the Hudi table."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Source Ordering Fields")," -\xa0 For de-duplication of changelog records the source ordering field should be set to the actual position of the change event as it happened on the database. For instance, we use the FILEID and POS fields in MySql and LSN fields in Postgres databases respectively to ensure records are processed in the correct order of occurrence in the original database."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Partition Fields")," - Don\u2019t feel restricted to matching the partitioning of your Hudi tables with the same partition fields as the upstream database. You can set partition fields independently for the Hudi table as needed.")),(0,r.kt)("h3",{id:"bootstrapping-existing-tables"},"Bootstrapping Existing tables"),(0,r.kt)("p",null,"One important use case might be when CDC ingestion has to be done for existing database tables. There are two ways we can ingest existing database data prior to streaming the changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"By default on initialization, Debezium performs an initial consistent snapshot of the database (controlled by config snapshot.mode). After the initial snapshot, it continues streaming updates from the correct position to avoid loss of data."),(0,r.kt)("li",{parentName:"ol"},"While the first approach is simple, for large tables it may take a long time for Debezium to bootstrap the initial snapshot. Alternatively, we could run a Deltastreamer job to bootstrap the table directly from the database using the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/JdbcSource.java"},"JDBC source"),". This provides more flexibility to the users in defining and executing more optimized SQL queries required to bootstrap the database table. Once the bootstrap job finishes successfully, another Deltastreamer job is executed that processes the database changelogs from Debezium. Users will have to use ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/hoodie_deltastreamer/#checkpointing"},"checkpointing")," in Deltastreamer to ensure the second job starts processing the changelogs from the correct position to avoid data loss.")),(0,r.kt)("h3",{id:"example-implementation"},"Example Implementation"),(0,r.kt)("p",null,"The following describes steps to implement an end-to-end CDC pipeline using an AWS RDS instance of Postgres, Kubernetes-based Debezium deployment, and Hudi Deltastreamer running on a spark cluster."),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"A few configuration changes are required for the RDS instance to enable logical replication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-roomsql"},"SET rds.logical_replication to 1 (instead of 0)\n\npsql --host=<aws_rds_instance> --port=5432 --username=postgres --password -d <database_name>;\n\nCREATE PUBLICATION <publication_name> FOR TABLE schema1.table1, schema1.table2;\n\nALTER TABLE schema1.table1 REPLICA IDENTITY FULL;\n")),(0,r.kt)("h3",{id:"debezium-connector"},"Debezium Connector"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://strimzi.io/blog/2020/01/27/deploying-debezium-with-kafkaconnector-resource/"},"Strimzi")," is the recommended option to deploy and manage Kafka connectors on Kubernetes clusters. Alternatively, you have the option to use the Confluent managed ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/debezium-connect-postgres-source/current/overview.html"},"Debezium connector"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create namespace kafka\nkubectl create -f https://strimzi.io/install/latest?namespace=kafka -n kafka\nkubectl -n kafka apply -f kafka-connector.yaml\n")),(0,r.kt)("p",null,"An example for kafka-connector.yaml is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kafka.strimzi.io/v1beta2\nkind: KafkaConnect\nmetadata:\nname: debezium-kafka-connect\nannotations:\nstrimzi.io/use-connector-resources: "false"\nspec:\nimage: debezium-kafka-connect:latest\nreplicas: 1\nbootstrapServers: localhost:9092\nconfig:\nconfig.storage.replication.factor: 1\noffset.storage.replication.factor: 1\nstatus.storage.replication.factor: 1\n')),(0,r.kt)("p",null,"The docker image debezium-kafka-connect can be built using the following Dockerfile that includes the Postgres Debezium Connector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"FROM confluentinc/cp-kafka-connect:6.2.0 as cp\nRUN confluent-hub install --no-prompt confluentinc/kafka-connect-avro-converter:6.2.0\nFROM strimzi/kafka:0.18.0-kafka-2.5.0\nUSER root:root\nRUN yum -y update\nRUN yum -y install git\nRUN yum -y install wget\n\nRUN wget https://repo1.maven.org/maven2/io/debezium/debezium-connector-postgres/1.6.1.Final/debezium-connector-postgres-1.6.1.Final-plugin.tar.gz\nRUN tar xzf debezium-connector-postgres-1.6.1.Final-plugin.tar.gz\n\nRUN mkdir -p /opt/kafka/plugins/debezium && mkdir -p /opt/kafka/plugins/avro/\nRUN mv debezium-connector-postgres /opt/kafka/plugins/debezium/\nCOPY --from=cp /usr/share/confluent-hub-components/confluentinc-kafka-connect-avro-converter/lib /opt/kafka/plugins/avro/\nUSER 1001\n")),(0,r.kt)("p",null,"Once the Strimzi operator and the Kafka connect are deployed, we can start the Debezium connector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type:application/json" -d @connect-source.json http://localhost:8083/connectors/\n')),(0,r.kt)("p",null,"The following is an example of a configuration to setup Debezium connector for generating the changelogs for two tables, table1, and table2."),(0,r.kt)("p",null,"Contents of connect-source.json:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "postgres-debezium-connector",\n  "config": {\n    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",\n    "database.hostname": "localhost",\n    "database.port": "5432",\n    "database.user": "postgres",\n    "database.password": "postgres",\n    "database.dbname": "database",\n    "plugin.name": "pgoutput",\n    "database.server.name": "postgres",\n    "table.include.list": "schema1.table1,schema1.table2",\n    "publication.autocreate.mode": "filtered",\n    "tombstones.on.delete":"false",\n    "key.converter": "io.confluent.connect.avro.AvroConverter",\n    "key.converter.schema.registry.url": "<schema_registry_host>",\n    "value.converter": "io.confluent.connect.avro.AvroConverter",\n    "value.converter.schema.registry.url": "<schema_registry_host>",\n    "slot.name": "pgslot"\n  }\n}\n')),(0,r.kt)("h3",{id:"hudi-deltastreamer"},"Hudi Deltastreamer"),(0,r.kt)("p",null,"Next, we run the Hudi Deltastreamer using spark that will ingest the Debezium changelogs from kafka and write them as a Hudi table. One such instance of the command is shown below that works for Postgres database.\xa0 A few key configurations are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the source class to PostgresDebeziumSource."),(0,r.kt)("li",{parentName:"ol"},"Set the payload class to PostgresDebeziumAvroPayload."),(0,r.kt)("li",{parentName:"ol"},"Configure the schema registry URLs for Debezium Source and Kafka Source."),(0,r.kt)("li",{parentName:"ol"},"Set the record key(s) as the primary key(s) of the database table."),(0,r.kt)("li",{parentName:"ol"},"Set the source ordering field (dedup) to _event_lsn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'spark-submit \\\\\n  --jars "/home/hadoop/hudi-utilities-bundle_2.12-0.10.0.jar,/usr/lib/spark/external/lib/spark-avro.jar" \\\\\n  --master yarn --deploy-mode client \\\\\n  --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer /home/hadoop/hudi-packages/hudi-utilities-bundle_2.12-0.10.0-SNAPSHOT.jar \\\\\n  --table-type COPY_ON_WRITE --op UPSERT \\\\\n  --target-base-path s3://bucket_name/path/for/hudi_table1 \\\\\n  --target-table hudi_table1\xa0 --continuous \\\\\n  --min-sync-interval-seconds 60 \\\\\n  --source-class org.apache.hudi.utilities.sources.debezium.PostgresDebeziumSource \\\\\n  --source-ordering-field _event_lsn \\\\\n  --payload-class org.apache.hudi.common.model.debezium.PostgresDebeziumAvroPayload \\\\\n  --hoodie-conf schema.registry.url=https://localhost:8081 \\\\\n  --hoodie-conf hoodie.deltastreamer.schemaprovider.registry.url=https://localhost:8081/subjects/postgres.schema1.table1-value/versions/latest \\\\\n  --hoodie-conf hoodie.deltastreamer.source.kafka.value.deserializer.class=io.confluent.kafka.serializers.KafkaAvroDeserializer \\\\\n  --hoodie-conf hoodie.deltastreamer.source.kafka.topic=postgres.schema1.table1 \\\\\n  --hoodie-conf auto.offset.reset=earliest \\\\\n  --hoodie-conf hoodie.datasource.write.recordkey.field=\u201ddatabase_primary_key\u201d \\\\\n  --hoodie-conf hoodie.datasource.write.partitionpath.field=partition_key \\\\\n  --enable-hive-sync \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.MultiPartKeysValueExtractor \\\\\n  --hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.database=default \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.table=hudi_table1 \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.partition_fields=partition_key\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This post introduced the Debezium Source for Hudi Deltastreamer to ingest Debezium changelogs into Hudi tables. Database data can now be ingested into data lakes to provide a cost-effective way to store and analyze database data."),(0,r.kt)("p",null,"Please follow this ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-1290"},"JIRA")," to learn more about active development on this new feature. I look forward to more contributions and feedback from the community. Come join our ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/enQtODYyNDAxNzc5MTg2LTE5OTBlYmVhYjM0N2ZhOTJjOWM4YzBmMWU2MjZjMGE4NDc5ZDFiOGQ2N2VkYTVkNzU3ZDQ4OTI1NmFmYWQ0NzE"},"Hudi Slack")," channel or attend one of our ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/community/syncs"},"community events")," to learn more."))}p.isMDXComponent=!0}}]);