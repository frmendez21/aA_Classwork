require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject

  def self.columns
    # ...
    return @result unless @result.nil?
    query = DBConnection.execute2(<<-SQL)
      SELECT *
      FROM "#{self.table_name}"
    SQL
    @result = query.first.map(&:to_sym)
  end

  def self.finalize!
    columns.each do |column|
      define_method(column) do 
        self.attributes[column]
      end
      define_method("#{column}=") do |val|
        self.attributes[column] = val
      end
    end
  end

  def self.table_name=(table_name)
    # ...
   @table_name = table_name
  end

  def self.table_name
    # ...
    @table_name ||= self.to_s.tableize
  end

  def self.all
    # fetches all records from db
    #generate SQL and print out to view and verify it, heredoc!
    query = DBConnection.execute(<<-SQL)
      SELECT *
      FROM "#{self.table_name}"
    SQL
    self.parse_all(query)
  end

  def self.parse_all(results)
    # iterate through all
    results.map { |v| self.new(v) }
  end

  def self.find(id)
    # return single obj with given id
    result = DBConnection.execute(<<-SQL)
    SELECT *
    FROM "#{self.table_name}"
    WHERE id = "#{id}"
    SQL
    parse_all(result).first
  end

  def initialize(params = {})
    # iterate through the attr_name value pairs
    params.each do |name, value|
      namesym = name.to_sym
      if !self.class.columns.include?(namesym)
        raise  "unknown attribute '#{namesym}'"
      end
      self.send("#{name}=", value)
    end
  end

  def attributes
    # ...
    @attributes = {} if @attributes.nil?
    @attributes
  end

  def attribute_values
   #returns array of values for each attr, map on ::columns, send on instance to get val
   self.class.columns.map { |attr| self.send(attr) }
  end

  def insert
    col_name = self.class.columns[1..-1].join(', ')
    question_marks = (['?'] * (self.class.columns[1..-1].length)).join(', ')
    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
    INSERT INTO #{self.class.table_name }(#{col_name})
    VALUES (#{question_marks})
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
